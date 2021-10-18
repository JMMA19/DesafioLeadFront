import { Component, OnInit } from '@angular/core';
import { usuario} from '../models/usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 usuario: usuario = new usuario();


  constructor(private authService: AuthService){ }

  ngOnInit(): void {
    
  }
  fazerLogin(){
    this.authService.auth(this.usuario).subscribe(Response =>{
      const{token, tipo} = Response;
    }, error =>{
      console.log(error)
    });
  }
}
