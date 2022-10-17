import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { faArrowRotateRight, faBars, faDragon, faGear, faMagnifyingGlass, faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/loginService.service';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-barra-de-busqueda',
  templateUrl: './barra-de-busqueda.component.html',
  styleUrls: ['./barra-de-busqueda.component.css']
})
export class BarraDeBusquedaComponent implements OnInit {
  //Iconos para la barra de busqueda
  faBars = faBars;
  faArrowRotateRight = faArrowRotateRight;
  faGear = faGear;
  faMagnifyingGlass = faMagnifyingGlass;
  faPersonWalkingArrowRight = faPersonWalkingArrowRight;
  faDragon = faDragon;
  //variables
  //constructores
  constructor(private login: LoginService, public dialog: MatDialog) { }
  //variables

  ngOnInit(): void {
  }

  //metodos
  openDialog(){
    this.dialog.open(LoginComponent);
  }
}
