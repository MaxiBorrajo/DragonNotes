import { Component, Input, OnInit } from '@angular/core';
import { faEllipsisVertical, faReply, faSkull, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { Nota } from 'src/app/interfaces y clases/nota';
import {MatDialog} from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotasManagementService } from 'src/app/services/notas-management.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-nota-basura',
  templateUrl: './nota-basura.component.html',
  styleUrls: ['./nota-basura.component.css']
})
export class NotaBasuraComponent implements OnInit {
  //variables
  @Input() nota:Nota;
  @Input() i:number;

  //iconos
  faEllipsisVertical = faEllipsisVertical;
  faSkull = faSkull;
  faReply = faReply;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private notaManagement:NotasManagementService) { }

  ngOnInit(): void {
    
  }

  //metodos
  openDialogDelete(){
    this.notaManagement.guardarId(this.i)
    this.dialog.open(DialogDeleteComponent);
  }

  recoverNote(){
    this.notaManagement.recuperarNota(this.i, this.nota);
    this._snackBar.open("Nota recuperada", 'Ok', {
      duration: 3000
    })
  }

}
