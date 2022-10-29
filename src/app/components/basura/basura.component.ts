import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Nota } from 'src/app/interfaces y clases/nota';
import { NotasManagementService } from 'src/app/services/notas-management.service';

@Component({
  selector: 'app-basura',
  templateUrl: './basura.component.html',
  styleUrls: ['./basura.component.css']
})
export class BasuraComponent implements OnInit {

  //variables
  notas:Nota[]=[];
  refreshSubscription: Subscription;

  constructor(private notasManagement:NotasManagementService) { }

  ngOnInit(): void {
    this.notasManagement.obtenerNotasBasura().subscribe(resp => {
      this.notas = Object.values(resp);
    })

    this.refreshSubscription = this.notasManagement.refresh$.subscribe(() => {
      this.notasManagement.obtenerNotasBasura().subscribe(resp => {
        this.notas = Object.values(resp);
      })
    })
  }

  ngOnDestroy(): void{
    this.refreshSubscription.unsubscribe();
  }

}
