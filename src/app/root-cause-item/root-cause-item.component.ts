import { Component, Input, OnInit } from '@angular/core';
import { RootCauseViewModel } from '../models/root-cause.view-model';

@Component({
  selector: 'g[app-root-cause-item]',
  templateUrl: './root-cause-item.component.html',
  styleUrls: ['./root-cause-item.component.scss'],
})
export class RootCauseItemComponent implements OnInit {

  @Input()
  item: RootCauseViewModel;

  constructor() {
  }

  ngOnInit() {
  }

}
