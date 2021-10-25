import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

   filmeSerch! : FormGroup;
   
   

  constructor(
    private fb : FormBuilder,
    private router : Router,
   
    
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

  pesquisar(){
    
    
    if(!this.filmeSerch.controls.Titulo.value){
      this.router.navigate(['']);
    }else{
    let titulo = this.filmeSerch.controls.Titulo.value;
    this.router.navigate(['List/', titulo]);
    
    }  
  
}
  

}
