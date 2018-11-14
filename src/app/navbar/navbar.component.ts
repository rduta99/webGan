import { Component, OnInit } from '@angular/core';
import { RegistService } from "../regist.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public login: boolean;

  constructor(private regist: RegistService) { 
    
  }

  ngOnInit() {
    
  }

}
