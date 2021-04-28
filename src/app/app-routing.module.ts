import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'/lista'},
  { path:'lista', component:ListaComponent},
  { path:'formulario', component:FormularioComponent},
  { path:'historico', component:HistoricoComponent},
  { path:'**', redirectTo:'/lista'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
