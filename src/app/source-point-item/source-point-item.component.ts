import { Component, Input, OnInit } from '@angular/core';
import { SourcePointViewModel } from '../models/source-point.view-model';

@Component({
  selector: 'g[app-source-point-item]',
  templateUrl: './source-point-item.component.html',
  styleUrls: ['./source-point-item.component.scss'],
})
export class SourcePointItemComponent implements OnInit {

  @Input()
  item: SourcePointViewModel;

  constructor() {
  }

  ngOnInit() {
  }

}
