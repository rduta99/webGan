import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RegistService } from '../regist.service';

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
  public cek: boolean;

  constructor(private ceks: RegistService) { }

  ngOnInit() {
  }

}
