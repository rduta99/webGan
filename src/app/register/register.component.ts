import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({opacity:0})),
      transition('void => *', [
        animate(1000)
      ])
    ])
  ]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
