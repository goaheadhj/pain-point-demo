import { Component, Input, OnInit } from '@angular/core';
import { RootCauseViewModel } from '../models/root-cause.view-model';

@Component({
  selector: 'g[app-root-cause-list]',
  templateUrl: './root-cause-list.component.html',
  styleUrls: ['./root-cause-list.component.scss'],
})
export class RootCauseListComponent implements OnInit {
  @Input()
  items: RootCauseViewModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
