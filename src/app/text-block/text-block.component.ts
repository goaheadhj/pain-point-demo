import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'g[app-text-block]',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss'],
})
export class TextBlockComponent implements OnInit {
  @Input()
  height: string;
  @Input()
  width: string;
  @Input()
  text: string;

  constructor() {
  }

  ngOnInit() {
  }

}
