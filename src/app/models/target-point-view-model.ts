import { Rect } from './rect';
import { TargetPointModel } from './target-point.model';
import { SourcePointViewModel } from './source-point.view-model';

export class TargetPointViewModel {
  sourcePoints: SourcePointViewModel[] = [];

  constructor(
    public payload: TargetPointModel,
    public rect = new Rect(),
  ) {
  }
}
