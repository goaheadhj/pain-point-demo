import { Injectable } from '@angular/core';
import { rootCauses } from '../mock/root-causes';
import { painPoints } from '../mock/pain-points';
import { RootCauseModel } from './root-cause.model';
import { PainPointModel } from './pain-point.model';

@Injectable({
  providedIn: 'root',
})
export class RootCauseEditor {
  rootCauses: RootCauseModel[] = rootCauses;
  painPoints: PainPointModel[] = painPoints;
  heightOfPainPoint = 60;
  widthOfPainPoint = 750;
  gutterOfPainPoint = 10;
  heightOfRootCause = 60;
  widthOfRootCause = 250;

  constructor() {
  }

  yOf(cause: RootCauseModel): number {
    const index = this.rootCauses.indexOf(cause);
    return this.rootCauses.slice(0, index).reduce((acc, it) => acc + this.heightOf(it), 0);
  }

  heightOf(cause: RootCauseModel): number {
    const innerPainPoints = this.painPoints.filter(it => it.rootCauseId === cause.id);
    return (this.heightOfPainPoint + this.gutterOfPainPoint) * Math.max(innerPainPoints.length, 1);
  }

  halfHeightOf(cause: RootCauseModel): number {
    return this.heightOf(cause) / 2;
  }
}
