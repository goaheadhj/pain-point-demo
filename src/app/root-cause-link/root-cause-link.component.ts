import { Component, Input, OnInit } from '@angular/core';
import { PainPointViewModel } from '../models/pain-point.view-model';
import { Rect } from '../models/rect';
import { path, Path } from 'd3-path';

@Component({
  selector: 'g[app-root-cause-link]',
  templateUrl: './root-cause-link.component.html',
  styleUrls: ['./root-cause-link.component.scss'],
})
export class RootCauseLinkComponent implements OnInit {

  @Input()
  painPoint: PainPointViewModel;

  constructor() {
  }

  get source(): Rect {
    return this.painPoint.rect;
  }

  get target(): Rect {
    return this.painPoint.rootCause.rect;
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
