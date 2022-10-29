import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotasManagementService } from 'src/app/services/notas-management.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<DialogDeleteComponent>, private notaManagement:NotasManagementService) { }

  ngOnInit(): void {
  }

  borrarPorCompleto(){
    const id = this.notaManagement.obtenerId();
    this.notaManagement.borrarNotaBDBasura(id);
    this.closeDialog();
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
