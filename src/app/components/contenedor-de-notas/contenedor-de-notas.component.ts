import { Component, OnInit } from '@angular/core';
import { faNoteSticky, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contenedor-de-notas',
  templateUrl: './contenedor-de-notas.component.html',
  styleUrls: ['./contenedor-de-notas.component.css']
})
export class ContenedorDeNotasComponent implements OnInit {

  //Iconos
  faTrash = faTrash;
  faNoteSticky = faNoteSticky;

  constructor() { }

  ngOnInit(): void {
  }

}
