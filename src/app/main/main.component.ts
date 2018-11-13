import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),

      transition('void => *', [
        animate(1000)
      ]),

      transition('* => void', [
        animate(1000)
      ])
    ])
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
