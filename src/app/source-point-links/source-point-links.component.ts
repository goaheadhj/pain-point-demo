import { Component, Input, OnInit } from '@angular/core';
import { SourcePointViewModel } from '../models/source-point.view-model';

@Component({
  selector: 'g[app-source-point-links]',
  templateUrl: './source-point-links.component.html',
  styleUrls: ['./source-point-links.component.scss'],
})
export class SourcePointLinksComponent implements OnInit {

  @Input()
  sourcePoints: SourcePointViewModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
