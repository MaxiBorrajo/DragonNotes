import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {getDatabase} from '@angular/fire/database';
import { Nota } from '../interfaces y clases/nota';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotasManagementService {
  private id:number = 0;
  private _refresh$ = new Subject<void>();
  private notasBasura:Nota[] = [];


  constructor(private http:HttpClient, private firestore:Firestore) {
    this.obtenerNotasBasura().subscribe(resp => {
      this.notasBasura = Object.values(resp);
    })
   }

  get refresh$(){
    return this._refresh$;
  }
  guardarNotas(notas:Nota[]){
    this.http.put('https://dragonnotes-13571-default-rtdb.firebaseio.com/datos.json', notas).subscribe(resp=>{
      console.log(resp)
    },
    err=>{
      console.log(err)
    })
  }

  guardarNotaBasura(nota:Nota){
    this.notasBasura.push(nota);
  }

  obtenerNotasBasura(): Observable<Nota[]>{
    return this.http.get<Nota[]>('https://dragon-notes-basura-default-rtdb.firebaseio.com/datos.json');
  }

  obtenerNotas(): Observable<Nota[]>{
    return this.http.get<Nota[]>('https://dragonnotes-13571-default-rtdb.firebaseio.com/datos.json');
  }

  obtenerNota(id:number): Observable<Nota>{
    const url = 'https://dragonnotes-13571-default-rtdb.firebaseio.com/datos/' + id + '.json'
    return this.http.get<Nota>(url)
  }

  eliminarNotaBDPrincipal(id:number){
    const urlBDBasura = 'https://dragon-notes-basura-default-rtdb.firebaseio.com/datos.json'
    this.http.put(urlBDBasura, this.notasBasura).subscribe(resp=>{
      console.log(resp)
    },
    err=>{
      console.log(err)
    })
    const urlBDPrincipal = 'https://dragonnotes-13571-default-rtdb.firebaseio.com/datos/' + id + '.json'
    this.http.delete(urlBDPrincipal).pipe(
      tap(() => {
        this._refresh$.next();
      })
    ).subscribe(
      resp => console.log(resp),
      err => console.log(err)
    );
  }

  editarNota(id:number, nota:Nota){
    const url = 'https://dragonnotes-13571-default-rtdb.firebaseio.com/datos/' + id + '.json'
    this.http.put(url, nota).pipe(
      tap(() => {
        this._refresh$.next();
      })
    ).subscribe(
      resp => console.log(resp),
      err => console.log(err));
  }

  guardarId(id:number){
    this.id = id;
  }

  obtenerId(){
    return this.id;
  }
}
