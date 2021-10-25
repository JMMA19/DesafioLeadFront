import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  userAutenticado : boolean = false;

  constructor(
    private http: HttpClient,
    private router : Router
    ) { }

    
    httpOptions = {
      headers: new HttpHeaders({
       'Content-Type':'application/jason'
      })
    }

    auth(usuario: usuario){
      let cpf = usuario.cpf;
      let senha = usuario.senha;
     return this.http.post<any>(`/api//Auth`, {cpf, senha})
   }
 /*  fazerLogin(usuario: usuario){

    if(usuario.cpf == "042" && usuario.senha == "123"){
      this.userAutenticado = true;
      this.router.navigate(['/login']);
    }else{
      this.userAutenticado = false;
    }
  }
  usuarioautenticado(){
   return this.userAutenticado;
  } */
 
}
