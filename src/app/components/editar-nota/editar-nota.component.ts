import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { faFloppyDisk, faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Nota } from 'src/app/interfaces y clases/nota';
import { NotasManagementService } from 'src/app/services/notas-management.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {

  //variables
  id:number = 0;
  notaActual:Nota;
  //iconos
  faFloppyDisk = faFloppyDisk;
  faXMark = faXmark;
  faPen = faPen;

  //constructores
  constructor(private notaManagement:NotasManagementService, public dialogRef: MatDialogRef<EditarNotaComponent>) { 
  }

  ngOnInit(): void {
    this.id = this.notaManagement.obtenerId();
    this.notaManagement.obtenerNota(this.id).subscribe(
      resp => {
        console.log(resp)
        let valoresNota = Object.values(resp);
        this.notaActual = new Nota(valoresNota[2], valoresNota[0], valoresNota[1]);
        this.nuevaNota.get('tituloNota')?.setValue(this.notaActual.getTitulo());
        this.nuevaNota.get('cuerpoNota')?.setValue(this.notaActual.getCuerpo());
      }
    )
  }

  //variables
  nuevaNota = new FormGroup({
    tituloNota: new FormControl(''),
    cuerpoNota: new FormControl('')
  });

  //metodos

  valorTitulo(){
    return String(this.nuevaNota.get("tituloNota")?.value);
  }

  valorCuerpo(){
    return String(this.nuevaNota.get("cuerpoNota")?.value);
  }
  EditarNota(){
    const nota = new Nota(this.valorTitulo(), this.valorCuerpo(), this.notaActual.getFechaDeCreacion());
    this.notaManagement.editarNota(this.id, nota);
    this.closeDialog();
  }
  closeDialog(){
    this.dialogRef.close()
  }
}
