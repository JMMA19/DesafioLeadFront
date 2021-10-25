import { Component, EventEmitter, OnInit } from '@angular/core';
import { Filme } from '../models/Filme.model';
import { FilmeService } from 'src/app/Services/filme.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css']
})
export class CardFilmeComponent implements OnInit {

  Filmeslist: Filme[] = [];
  public Titulo: any;

  constructor(
    private route: ActivatedRoute,
    public FilmeService: FilmeService,
    
    
  ) { }
  ngOnInit(){
  
    this.Titulo = (this.route.snapshot.paramMap.get("tit"));

    this.getFilmes();
  }
  
  
  
  getFilmes(){
    if(this.Titulo){
      this.FilmeService.obterFilmeTitulo(this.Titulo).subscribe(data =>{
        if(data.length==0){
          this.Titulo = "invalid"
        }else{
          this.Filmeslist =(data) 
        }
      });
    }else{
      this.FilmeService.obterFilmesAll().subscribe(data =>{
        this.Filmeslist = data;
      })
    } 
  }
}


