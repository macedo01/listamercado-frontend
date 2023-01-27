import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { DetalhelistaComponent } from './componentes/detalhelista/detalhelista.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalhelistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // preciso do componente de req http
    FormsModule // preciso do componente de manipulacoes de formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
