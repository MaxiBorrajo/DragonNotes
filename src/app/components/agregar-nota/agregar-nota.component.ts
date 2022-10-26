import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { Nota } from 'src/app/interfaces y clases/nota';
import { Output, EventEmitter } from '@angular/core';
import { NotasManagementService } from 'src/app/services/notas-management.service';

@Component({
  selector: 'app-agregar-nota',
  templateUrl: './agregar-nota.component.html',
  styleUrls: ['./agregar-nota.component.css']
})
export class AgregarNotaComponent implements OnInit {

  //variables
  @Output() newNotaEvent = new EventEmitter<Nota>();

  //iconos
  faFloppyDisk = faFloppyDisk;
  constructor(private notaManagement:NotasManagementService) { }

  ngOnInit(): void {
  }

  //variables
  nuevaNota = new FormGroup({
    tituloNota: new FormControl(''),
    cuerpoNota: new FormControl('')
  });

  mostrarSeccionTitulo:boolean = false;

  //metodos

  valorTitulo(){
    return String(this.nuevaNota.get("tituloNota")?.value);
  }

  valorCuerpo(){
    return String(this.nuevaNota.get("cuerpoNota")?.value);
  }
  mostrarTitulo(){
    this.mostrarSeccionTitulo = !this.mostrarSeccionTitulo
  }

  guardarNota(){
    const nota = new Nota(this.valorTitulo(), this.valorCuerpo(), new Date());
    if(!(nota.getTitulo() == "" && nota.getCuerpo() == "")){
      this.newNotaEvent.emit(nota);
    }
  }
}
