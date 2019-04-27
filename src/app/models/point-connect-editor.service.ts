import { Injectable } from '@angular/core';
import { TargetPointModel } from './target-point.model';
import { SourcePointModel } from './source-point.model';
import { TargetPointViewModel } from './target-point-view-model';
import { SourcePointViewModel } from './source-point.view-model';
import { Rect } from './rect';

@Injectable({
  providedIn: 'root',
})
export class PointConnectEditor {
  targetPoints: TargetPointViewModel[] = [];
  sourcePoints: SourcePointViewModel[] = [];
  heightOfSourcePoint = 60;
  widthOfSourcePoint = 750;
  gutter = 100;
  heightOfTargetPoint = 60;
  widthOfTargetPoint = 250;

  constructor() {
  }

  get width(): number {
    return this.widthOfSourcePoint + this.gutter + this.widthOfTargetPoint;
  }

  get height(): number {
    return this.sourcePoints.map(it => it.rect.height).reduce((acc, height) => acc + height, 0);
  }

  load(targetPoint: TargetPointModel[], painPoints: SourcePointModel[]): void {
    this.targetPoints = targetPoint.map(it => new TargetPointViewModel(it));
    this.sourcePoints = painPoints.sort((v1, v2) => (v1.targetPointId || 999) - (v2.targetPointId || 999))
      .map((it, index) => new SourcePointViewModel(it));
    this.updateRelations();
    this.updateRects();
  }

  private updateRects(): void {
    this.sourcePoints.forEach((it, index) => {
      return it.rect = new Rect(0, index * this.heightOfSourcePoint, this.widthOfSourcePoint, this.heightOfSourcePoint);
    });

    let top = 0;
    this.targetPoints.forEach((targetPoint) => {
      const outerHeight = targetPoint.sourcePoints.reduce((acc, it) => acc + it.rect.height, 0) || this.heightOfTargetPoint;
      targetPoint.rect = new Rect(this.widthOfSourcePoint + this.gutter, top + outerHeight / 2 - this.heightOfTargetPoint / 2,
        this.widthOfTargetPoint, this.heightOfTargetPoint);
      top += outerHeight;
    });
  }

  private updateRelations(): void {
    this.targetPoints.forEach(targetPoint => targetPoint.sourcePoints =
      this.sourcePoints.filter(painPoint => painPoint.payload.targetPointId === targetPoint.payload.id),
    );
    this.targetPoints.forEach(targetPoint => targetPoint.sourcePoints.forEach(painPoint => painPoint.targetPoint = targetPoint));
  }
}
