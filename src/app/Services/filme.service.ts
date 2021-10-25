import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Filme } from '../models/Filme.model';

@Injectable({
  providedIn: 'root'
})

export class FilmeService{
  FilmeEmitter = new EventEmitter<string>();

  constructor(
    
    private httpClient: HttpClient
  ) { }

 
  public obterFilmeTitulo(Titulo : string): Observable<Filme[]>{
  
    return this.httpClient.get<Filme[]>('api/Filmes/showTit/' + Titulo);
      
  }
  public obterFilmesAll(): Observable<Filme[]>{
    return this.httpClient.get<Filme[]>(`api/Filmes/show`);
    
  }
  public salvarFilmes(Filme: Filme):Observable<any>{
    const token = window.localStorage.getItem('auth');
    if(token){
      const headers = new HttpHeaders().append('Authorization', token);
      return this.httpClient.post<Filme>('api/Filmes/save', Filme, {headers})
    }else{
      return this.httpClient.post<Filme>('api/Filmes/save', Filme,)
    }
  }
}
