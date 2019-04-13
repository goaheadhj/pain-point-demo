import { Component, OnInit } from '@angular/core';
import { RootCauseEditor } from '../models/root-cause-editor.service';
import { painPoints } from '../mock/pain-points';
import { rootCauses } from '../mock/root-causes';

@Component({
  selector: 'app-root-cause-editor',
  templateUrl: './root-cause-editor.component.html',
  styleUrls: ['./root-cause-editor.component.scss'],
})
export class RootCauseEditorComponent implements OnInit {

  constructor(public editor: RootCauseEditor) {
  }

  ngOnInit() {
    this.editor.load(rootCauses, painPoints);
  }

}
