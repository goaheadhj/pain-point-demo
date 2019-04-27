import { Component, Input, OnInit } from '@angular/core';
import { SourcePointViewModel } from '../models/source-point.view-model';
import { Rect } from '../models/rect';
import { path, Path } from 'd3-path';

@Component({
  selector: 'g[app-source-point-link]',
  templateUrl: './source-point-link.component.html',
  styleUrls: ['./source-point-link.component.scss'],
})
export class SourcePointLinkComponent implements OnInit {

  @Input()
  sourcePoint: SourcePointViewModel;

  constructor() {
  }

  get source(): Rect {
    return this.sourcePoint.rect;
  }

  get target(): Rect {
    return this.sourcePoint.targetPoint.rect;
  }

  ngOnInit() {
  }

  pathOf(source: Rect, target: Rect): Path {
    const p = path();
    const middleX = source.right + (target.left - source.right) / 2;
    p.moveTo(source.right, source.yCenter);
    p.lineTo(middleX, source.yCenter);
    p.lineTo(middleX, target.yCenter);
    p.lineTo(target.left, target.yCenter);
    return p;
  }
}
