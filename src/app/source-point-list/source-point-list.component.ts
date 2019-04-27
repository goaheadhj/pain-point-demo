import { Component, Input, OnInit } from '@angular/core';
import { SourcePointViewModel } from '../models/source-point.view-model';

@Component({
  selector: 'g[app-source-point-list]',
  templateUrl: './source-point-list.component.html',
  styleUrls: ['./source-point-list.component.scss'],
})
export class SourcePointListComponent implements OnInit {

  @Input()
  items: SourcePointViewModel[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
