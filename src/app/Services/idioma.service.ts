import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { idioma } from '../models/idioma.model';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  apiUrl = 'http://localhost:8080/Filmes/show/'
  httpOptions = {
    headers: new HttpHeaders({
     'Content-Type':'application/jason'
    })
  }
   constructor(
     private httpClient: HttpClient
   ) { }
 
   public obterFilmesAll(): Observable<idioma[]>{
     return this.httpClient.get<idioma[]>(this.apiUrl);
   }
 }
 