import { PainPointModel } from './pain-point.model';
import { Rect } from './rect';
import { RootCauseViewModel } from './root-cause.view-model';

export class PainPointViewModel {
  rootCause: RootCauseViewModel;

  constructor(
    public payload: PainPointModel,
    public rect = new Rect(),
  ) {
  }
}
