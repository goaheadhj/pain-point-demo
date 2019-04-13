import { Component, Input, OnInit } from '@angular/core';
import { PainPointViewModel } from '../models/pain-point.view-model';

@Component({
  selector: 'g[app-root-cause-links]',
  templateUrl: './root-cause-links.component.html',
  styleUrls: ['./root-cause-links.component.scss'],
})
export class RootCauseLinksComponent implements OnInit {

  @Input()
  painPoints: PainPointViewModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
