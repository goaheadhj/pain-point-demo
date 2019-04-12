import { Component, Input, OnInit } from '@angular/core';
import { PainPointModel } from '../models/pain-point.model';
import { RootCauseEditor } from '../models/root-cause-editor.service';

@Component({
  selector: 'g[app-paint-point-item]',
  templateUrl: './paint-point-item.component.html',
  styleUrls: ['./paint-point-item.component.scss'],
})
export class PaintPointItemComponent implements OnInit {

  @Input()
  item: PainPointModel;

  constructor(public editor: RootCauseEditor) {
  }

  ngOnInit() {
  }

}
