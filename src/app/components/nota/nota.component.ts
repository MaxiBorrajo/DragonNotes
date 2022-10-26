import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Nota } from 'src/app/interfaces y clases/nota';
import { NotasManagementService } from 'src/app/services/notas-management.service';
import { EditarNotaComponent } from '../editar-nota/editar-nota.component';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  //variables
  @Input() nota:Nota;
  @Input() i:number;

  //iconos
  faPenToSquare = faPenToSquare;
  faTrashCan = faTrashCan;
  constructor(public dialog: MatDialog, private notaManage:NotasManagementService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  
  //metodos
  openDialog(){
    this.dialog.open(EditarNotaComponent);
    this.notaManage.guardarId(this.i)
  }

  moverABasura(){
    this.notaManage.guardarNotaBasura(this.nota);
    this.notaManage.eliminarNotaBDPrincipal(this.i);
    this._snackBar.open("Nota Removida", 'Ok', {
      duration: 3000
    })
  }

}
