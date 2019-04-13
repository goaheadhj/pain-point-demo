import { Component, Input, OnInit } from '@angular/core';
import { PainPointViewModel } from '../models/pain-point.view-model';

@Component({
  selector: 'g[app-pain-point-list]',
  templateUrl: './pain-point-list.component.html',
  styleUrls: ['./pain-point-list.component.scss'],
})
export class PainPointListComponent implements OnInit {

  @Input()
  items: PainPointViewModel[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
