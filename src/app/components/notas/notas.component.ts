import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Nota } from 'src/app/interfaces y clases/nota';
import { NotasManagementService } from 'src/app/services/notas-management.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  refreshSubscription: Subscription;

  constructor(private notaManagement:NotasManagementService) { 
  }

  ngOnInit(): void {
    this.notaManagement.obtenerNotas().subscribe(resp => {
      this.notas = Object.values(resp);
    })

    this.refreshSubscription = this.notaManagement.refresh$.subscribe(() => {
      this.recargarDatos();
    })
  }

  ngOnDestroy(): void{
    this.refreshSubscription.unsubscribe();
  }

  //variables
  notas:Nota[]=[];

  agregarNota(nuevaNota:Nota){
    this.notas.push(nuevaNota);
    this.notaManagement.guardarNotas(this.notas);
  }

  recargarDatos(){
    this.notaManagement.obtenerNotas().subscribe(resp => {
      this.notas = Object.values(resp);
    })
  }
}
