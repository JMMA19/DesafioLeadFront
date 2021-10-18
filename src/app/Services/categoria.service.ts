import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  apiUrl = 'http://localhost:8080/Categoria/show'
  httpOptions = {
    headers: new HttpHeaders({
     'Content-Type':'application/jason'
    })
  }
   constructor(
     private httpClient: HttpClient
   ) { }

   public obterCategorias(): Observable<Categoria[]>{
     return this.httpClient.get<Categoria[]>(this.apiUrl);
   }

}