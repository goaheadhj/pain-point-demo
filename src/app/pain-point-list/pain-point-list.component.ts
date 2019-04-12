import { Component, Input, OnInit } from '@angular/core';
import { PainPointModel } from '../models/pain-point.model';
import { RootCauseEditor } from '../models/root-cause-editor.service';

@Component({
  selector: 'g[app-pain-point-list]',
  templateUrl: './pain-point-list.component.html',
  styleUrls: ['./pain-point-list.component.scss'],
})
export class PainPointListComponent implements OnInit {

  @Input()
  items: PainPointModel[] = [];

  constructor(private editor: RootCauseEditor) {
  }

  ngOnInit() {
  }

  yOf(item: PainPointModel): number {
    return this.editor.heightOfPainPoint * this.items.indexOf(item);
  }
}
