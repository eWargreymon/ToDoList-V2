import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'/lista'},
  { path:'lista', component:ListaComponent},
  { path:'formulario', component:FormularioComponent},
  { path:'**', redirectTo:'/lista'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
