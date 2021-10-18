import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private authservice: AuthService,
    private router : Router
    ) { }

  canActivate(

    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      return true;
    
      /* if(this.authservice.usuarioautenticado()){
        return true;
      }else{
        this.router.navigate(['/login']);
        return false
      } */
  }
}
