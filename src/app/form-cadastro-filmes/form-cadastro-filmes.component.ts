import { TreeError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categoria } from '../models/Categoria';
import { Filme } from '../models/Filme.model';
import { CategoriaService } from '../Services/categoria.service';

@Component({
  selector: 'app-form-cadastro-filmes',
  templateUrl: './form-cadastro-filmes.component.html',
  styleUrls: ['./form-cadastro-filmes.component.css']
})
export class FormCadastroFilmesComponent implements OnInit {
  
  filmeform!: FormGroup;
  categoriaList: Categoria[] = [];


  constructor(
    private fb: FormBuilder,
    private CategoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.getCategorias();
    this.createform();
    
  }
  getCategorias(){
    this.CategoriaService.obterCategorias().subscribe(cat =>{
      this.categoriaList = cat;
    })
  }

  createform():void{
    this.filmeform = this.fb.group({
      Titulo:[null],
      Sinopse:[null],
      imagem: [null],
      Data_lancamento:[null],
      Duracao: [null],
      idioma: [null], 
      categoria: [null]
    })

  }

  submeter(){

    let fimeobj = new Filme;  //Cria um objeto para ser construido.

    //definir qual sub objeto vai compor o atributo Idioma.
    switch (this.filmeform.controls.idioma.value) { 
    case "Portugues":
      fimeobj.idioma = {ID:1, Nome: "Portugues" , Tag :"PT-BR"};
        break;
    case "Eepanhol":
      fimeobj.idioma = {ID:2, Nome: "Espanhol" , Tag :"es"};
        break;
    case "Inglês":
      fimeobj.idioma = {ID:1, Nome: "Ingês" , Tag :"EN"};
        break;
    }
    //Filtragem de atributo selecionado em Categoria no formulario.
    let catObj = this.categoriaList.filter(cat=>  {
      return cat.Nome === this.filmeform.controls.categoria.value;
    });
    fimeobj.categoria = {ID:catObj[0].Id, Nome:catObj[0].Nome , Tag:catObj[0].Tag}
    
  }

 
}
