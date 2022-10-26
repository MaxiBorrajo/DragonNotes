import { Component, Input, OnInit } from '@angular/core';
import { Nota } from 'src/app/interfaces y clases/nota';

@Component({
  selector: 'app-nota-basura',
  templateUrl: './nota-basura.component.html',
  styleUrls: ['./nota-basura.component.css']
})
export class NotaBasuraComponent implements OnInit {
  //variables
  @Input() nota:Nota;
  @Input() i:number;

  constructor() { }

  ngOnInit(): void {
  }

}
