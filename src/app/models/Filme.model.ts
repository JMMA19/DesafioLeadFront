export class Filme{
  
    Id!: number;
	Titulo!: string;
	Sinopse!:string;
	imagem!: string;
	Data_lancamento!: string;
	Duracao!: number  ; 
	categoria!: {Id: number; Nome:string; Tag:string;}
    idioma!: { ID: Number; Nome: string; Tag: string;}  
	   
}
