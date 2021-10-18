import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "src/app/home/home.component";
import { CadastroFilmeComponent } from './crud-filmes/cadastro-filme/cadastro-filme.component'; 
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component: HomeComponent, canActivate:[AuthGuard]},
  {path:'login',component: LoginComponent},
  {path:'cadastroFilmes',component: CadastroFilmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
