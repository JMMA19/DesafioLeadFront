import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/Filme.model';
import { FilmeService } from 'src/app/Services/filme.service';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css']
})
export class CardFilmeComponent implements OnInit {

  Filmeslist: Filme[] = [];
  constructor(
    public FilmeService: FilmeService
  ) { }
  ngOnInit(): void {
    this.getFilmes()
  }

  getFilmes(){
    this.FilmeService.obterFilmesAll().subscribe(data =>{
      this.Filmeslist = data;
      
    })
  }
}

