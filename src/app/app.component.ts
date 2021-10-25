import { Component } from '@angular/core';
import { NavbaServiceService } from './navbar/navba-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndLocadora';
  

constructor(private navbarService : NavbaServiceService){
  this.navbarService.EventoAltoContraste.subscribe(modo => {
    if(modo){
      document.body.classList.add('contrast');
    }else{
      document.body.classList.remove('contrast');
    }
  });
}




}