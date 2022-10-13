import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //variables
  loginValue$ = new EventEmitter<boolean>();
  constructor() { }
}
