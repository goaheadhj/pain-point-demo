import { SourcePointModel } from './source-point.model';
import { Rect } from './rect';
import { TargetPointViewModel } from './target-point-view-model';

export class SourcePointViewModel {
  targetPoint: TargetPointViewModel;

  constructor(
    public payload: SourcePointModel,
    public rect = new Rect(),
  ) {
  }
}
