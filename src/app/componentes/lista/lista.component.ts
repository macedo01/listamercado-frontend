import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lista } from 'src/app/model/lista';
import { ListasService } from 'src/app/servicos/listas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public listas: Lista[] = [];
  public novaLista: Lista;
  constructor(private service: ListasService) { 
    this.novaLista = new Lista();
  }

  ngOnInit(): void {
    this.getAllListas();
  }

  public getAllListas(){
    this.service.recuperarListas().subscribe(
      (res: Lista[]) => {
        this.listas = res;
      },
      (err) => {alert("Erro ao recuperar listas de compras")}    );
  }

  public cadastrarLista(){
    this.service.cadastrarListas(this.novaLista).subscribe(
      (res: Lista) => {
        this.getAllListas();
      },
      (err) => {alert("Erro ao cadastrar lista de compras")}
    );
  }
}
