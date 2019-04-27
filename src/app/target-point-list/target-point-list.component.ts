import { Component, Input, OnInit } from '@angular/core';
import { TargetPointViewModel } from '../models/target-point-view-model';

@Component({
  selector: 'g[app-target-point-list]',
  templateUrl: './target-point-list.component.html',
  styleUrls: ['./target-point-list.component.scss'],
})
export class TargetPointListComponent implements OnInit {
  @Input()
  items: TargetPointViewModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
