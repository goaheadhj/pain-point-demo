import { Component, OnInit } from '@angular/core';
import { RootCauseEditor } from '../models/root-cause-editor.service';

@Component({
  selector: 'g[app-root-cause-list]',
  templateUrl: './root-cause-list.component.html',
  styleUrls: ['./root-cause-list.component.scss'],
})
export class RootCauseListComponent implements OnInit {
  constructor(public editor: RootCauseEditor) {
  }

  ngOnInit() {
  }

}
