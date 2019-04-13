import { Component, Input, OnInit } from '@angular/core';
import { Rect } from '../models/rect';

@Component({
  selector: 'g[app-text-block]',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss'],
})
export class TextBlockComponent implements OnInit {
  @Input()
  rect: Rect;
  @Input()
  text: string;

  constructor() {
  }

  ngOnInit() {
  }

}
