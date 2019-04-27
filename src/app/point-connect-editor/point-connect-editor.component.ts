import { Component, OnInit } from '@angular/core';
import { PointConnectEditor } from '../models/point-connect-editor.service';
import { sourcePoints } from '../mock/source-points';
import { targetPoint } from '../mock/target-point';

@Component({
  selector: 'app-point-connect-editor',
  templateUrl: './point-connect-editor.component.html',
  styleUrls: ['./point-connect-editor.component.scss'],
})
export class PointConnectEditorComponent implements OnInit {

  constructor(public editor: PointConnectEditor) {
  }

  ngOnInit() {
    this.editor.load(targetPoint, sourcePoints);
  }

}
