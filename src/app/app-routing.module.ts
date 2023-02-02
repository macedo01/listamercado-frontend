import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhelistaComponent } from './componentes/detalhelista/detalhelista.component';
import { ListaComponent } from './componentes/lista/lista.component';

const routes: Routes = [
  {path:"", component: ListaComponent},
  {path:"detalhe/:id", component:DetalhelistaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
