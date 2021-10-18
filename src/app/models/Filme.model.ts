export class Filme{
  
    Id!: number;
	Titulo!: string;
	Sinopse!:string;
	imagem!: string;
	Data_lancamento!: string;
	Duracao!: number  ; 
    idioma!: { ID: Number; Nome: string; Tag: string;}  
	categoria!: {ID: number; Nome:string; Tag:string;}   
}
