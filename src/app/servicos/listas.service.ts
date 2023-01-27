import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lista } from '../model/lista';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  constructor(private http: HttpClient) { }

  public recuperarListas(): Observable<Lista[]>{
    return this.http.get<Lista[]>(environment.urlApi + '/listas');
  }

  public cadastrarListas(lista: Lista): Observable<Lista>{
    return this.http.post<Lista>(environment.urlApi + '/listas', lista);
  }
}
