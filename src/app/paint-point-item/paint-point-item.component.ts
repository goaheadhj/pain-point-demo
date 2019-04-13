import { Component, Input, OnInit } from '@angular/core';
import { PainPointViewModel } from '../models/pain-point.view-model';

@Component({
  selector: 'g[app-paint-point-item]',
  templateUrl: './paint-point-item.component.html',
  styleUrls: ['./paint-point-item.component.scss'],
})
export class PaintPointItemComponent implements OnInit {

  @Input()
  item: PainPointViewModel;

  constructor() {
  }

  ngOnInit() {
  }

}
