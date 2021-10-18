import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../models/Filme.model';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
 apiUrl = 'http://localhost:8080/Filmes/show/'
 httpOptions = {
   headers: new HttpHeaders({
    'Content-Type':'application/jason'
   })
 }
  constructor(
    private httpClient: HttpClient
  ) { }

  public obterFilmesAll(): Observable<Filme[]>{
    return this.httpClient.get<Filme[]>(this.apiUrl);
  }
}
