import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { RegistService } from "../regist.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),

      transition('void => *' ,[
        animate(1000)
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  constructor(private cek: RegistService, private router: Router) { 
    
  }

  ngOnInit() {
  }

}
