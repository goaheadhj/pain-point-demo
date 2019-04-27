import { Component, Input, OnInit } from '@angular/core';
import { TargetPointViewModel } from '../models/target-point-view-model';

@Component({
  selector: 'g[app-target-point-item]',
  templateUrl: './target-point-item.component.html',
  styleUrls: ['./target-point-item.component.scss'],
})
export class TargetPointItemComponent implements OnInit {

  @Input()
  item: TargetPointViewModel;

  constructor() {
  }

  ngOnInit() {
  }

}
