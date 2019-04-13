import { Injectable } from '@angular/core';
import { RootCauseModel } from './root-cause.model';
import { PainPointModel } from './pain-point.model';
import { RootCauseViewModel } from './root-cause.view-model';
import { PainPointViewModel } from './pain-point.view-model';
import { Rect } from './rect';

@Injectable({
  providedIn: 'root',
})
export class RootCauseEditor {
  rootCauses: RootCauseViewModel[] = [];
  painPoints: PainPointViewModel[] = [];
  heightOfPainPoint = 60;
  widthOfPainPoint = 750;
  gutter = 100;
  heightOfRootCause = 60;
  widthOfRootCause = 250;

  constructor() {
  }

  get width(): number {
    return this.widthOfPainPoint + this.gutter + this.widthOfRootCause;
  }

  get height(): number {
    return this.painPoints.map(it => it.rect.height).reduce((acc, height) => acc + height, 0);
  }

  load(rootCause: RootCauseModel[], painPoints: PainPointModel[]): void {
    this.rootCauses = rootCause.map(it => new RootCauseViewModel(it));
    this.painPoints = painPoints.sort((v1, v2) => (v1.rootCauseId || 999) - (v2.rootCauseId || 999))
      .map((it, index) => new PainPointViewModel(it));
    this.updateRelations();
    this.updateRects();
  }

  private updateRects(): void {
    this.painPoints.forEach((it, index) => {
      return it.rect = new Rect(0, index * this.heightOfPainPoint, this.widthOfPainPoint, this.heightOfPainPoint);
    });

    let top = 0;
    this.rootCauses.forEach((cause) => {
      const outerHeight = cause.painPoints.reduce((acc, it) => acc + it.rect.height, 0) || this.heightOfRootCause;
      cause.rect = new Rect(this.widthOfPainPoint + this.gutter, top + outerHeight / 2 - this.heightOfRootCause / 2,
        this.widthOfRootCause, this.heightOfRootCause);
      top += outerHeight;
    });
  }

  private updateRelations(): void {
    this.rootCauses.forEach(cause => cause.painPoints =
      this.painPoints.filter(painPoint => painPoint.payload.rootCauseId === cause.payload.id),
    );
    this.rootCauses.forEach(cause => cause.painPoints.forEach(painPoint => painPoint.rootCause = cause));
  }
}
