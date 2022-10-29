//Importaciones
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasuraComponent } from './components/basura/basura.component';
import { NotasComponent } from './components/notas/notas.component';

// Rutas
const routes: Routes = [
  {path:'', redirectTo:'notas', pathMatch:'full'},
  {path:'notas', component:NotasComponent},
  {path:'basura', component:BasuraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
