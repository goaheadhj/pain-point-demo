import { Rect } from './rect';
import { RootCauseModel } from './root-cause.model';
import { PainPointViewModel } from './pain-point.view-model';

export class RootCauseViewModel {
  painPoints: PainPointViewModel[] = [];

  constructor(
    public payload: RootCauseModel,
    public rect = new Rect(),
  ) {
  }
}
