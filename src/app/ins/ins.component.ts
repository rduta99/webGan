import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-ins',
  templateUrl: './ins.component.html',
  styleUrls: ['./ins.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({opacity:0})),
      transition('void => *', [
        animate(1000)
      ])
    ])
  ]
})
export class InsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
