import { Component, Input, OnInit } from '@angular/core';
import { RootCauseModel } from '../models/root-cause.model';
import { RootCauseEditor } from '../models/root-cause-editor.service';

@Component({
  selector: 'g[app-root-cause-item]',
  templateUrl: './root-cause-item.component.html',
  styleUrls: ['./root-cause-item.component.scss'],
})
export class RootCauseItemComponent implements OnInit {

  @Input()
  cause: RootCauseModel;

  constructor(public editor: RootCauseEditor) {
  }

  ngOnInit() {
  }

}
