import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistService {
  private usserList = [
    {
      "username": "rduta99",
      "password": "rastam12"
    }
  ];
  private user: String;

  constructor() { }
}
