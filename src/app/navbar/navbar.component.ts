import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbaServiceService } from './navba-service.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

  filmeSerch! : FormGroup;
  highContrast: boolean = false;
   
   

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private nvb : NavbaServiceService
   
    
  ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; 
    }

  ngOnInit(): void {
    this.Createform()
  }

  Createform(){
    this.filmeSerch = this.fb.group({
      Titulo : [null]
    })
  }

  changeConstrast(){
    this.highContrast = !this.highContrast;
    this.nvb.mudaAltoContraste(this.highContrast);
  }

  pesquisar(){
    
    
    if(!this.filmeSerch.controls.Titulo.value){
      this.router.navigate(['']);
    }else{
    let titulo = this.filmeSerch.controls.Titulo.value;
    this.router.navigate(['List/', titulo]);
    
    }  
  
}
  

}
