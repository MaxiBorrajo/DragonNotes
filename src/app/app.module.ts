//Importanciones de modulos
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatMenuModule} from '@angular/material/menu';

//Importaciones de componentes
import { AppComponent } from './app.component';
import { BarraDeBusquedaComponent } from './components/barra-de-busqueda/barra-de-busqueda.component';
import { ContenedorDeNotasComponent } from './components/contenedor-de-notas/contenedor-de-notas.component';
import { NotasComponent } from './components/notas/notas.component';
import { BasuraComponent } from './components/basura/basura.component';
import { LoginComponent } from './components/login/login.component';
import { NotaComponent } from './components/nota/nota.component'
import { EditarNotaComponent } from './components/editar-nota/editar-nota.component';
import { NotaBasuraComponent } from './components/nota-basura/nota-basura.component';
import { AgregarNotaComponent } from './components/agregar-nota/agregar-nota.component'
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component'; 


//Firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


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
    NotaBasuraComponent,
    DialogDeleteComponent
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
    MatMenuModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore())
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
