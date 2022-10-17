import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import { faDragon, faEnvelope, faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Iconos
  faUser = faUser;
  faEnvelope = faEnvelope;
  iconPass: IconDefinition = faEye;
  faDragon = faDragon;
  //variables
  visiblePassword: boolean = false;


  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  //constructores
  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  //metodos
  closeDialog(){
    this.dialogRef.close()
  }
  
  viewPassword(){
    if(!this.visiblePassword){
      this.visiblePassword = !this.visiblePassword;
      this.iconPass = faEyeSlash;
    }else{
      this.visiblePassword = !this.visiblePassword;
      this.iconPass = faEye;
    }
  }
}
