import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  public getAllProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(environment.urlApi + '/produtos');
  }

  
  public addNewProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(environment.urlApi + '/produtos', produto);
  }
}
