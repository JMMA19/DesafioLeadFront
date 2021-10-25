import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario} from '../models/usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 usuario: usuario = new usuario();


  constructor(private authService: AuthService, private router: Router){ }

  ngOnInit(): void {
    
  }
  fazerLogin(){    
    this.authService.auth(this.usuario).subscribe(Response =>{
      
      const{token, tipo} = Response;
      window.localStorage.setItem('auth',`${tipo} ${token}`);
      this.router.navigate(['']);
      
    }, error =>{
      console.log(error)
    });

    
  }

}
