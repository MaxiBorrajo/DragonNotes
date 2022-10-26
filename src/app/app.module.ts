import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraDeBusquedaComponent } from './components/barra-de-busqueda/barra-de-busqueda.component';
import { ContenedorDeNotasComponent } from './components/contenedor-de-notas/contenedor-de-notas.component';
import { NotasComponent } from './components/notas/notas.component';
import { BasuraComponent } from './components/basura/basura.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { NotaComponent } from './components/nota/nota.component'
import {HttpClientModule} from '@angular/common/http';
import { AgregarNotaComponent } from './components/agregar-nota/agregar-nota.component'
import {MatExpansionModule} from '@angular/material/expansion';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { EditarNotaComponent } from './components/editar-nota/editar-nota.component';
import { NotaBasuraComponent } from './components/nota-basura/nota-basura.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
@NgModule({
  declarations: [
    AppComponent,
    BarraDeBusquedaComponent,
    ContenedorDeNotasComponent,
    NotasComponent,
    BasuraComponent,
    LoginComponent,
    NotaComponent,
    AgregarNotaComponent,
    EditarNotaComponent,
    NotaBasuraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatExpansionModule,
    MatSnackBarModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore())
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
