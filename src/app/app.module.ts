import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { HttpClientModule } from '@angular/common/http';
import { FilmeListComponent } from './filme-list/filme-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { CardFilmeComponent } from './card-filme/card-filme.component';
import { LoginComponent } from './login/login.component';
import { FormsModule  } from "@angular/forms";
import { AuthService } from './login/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroFilmeComponent } from './crud-filmes/cadastro-filme/cadastro-filme.component';
import { FormCadastroFilmesComponent } from './form-cadastro-filmes/form-cadastro-filmes.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmeListComponent,
    NavbarComponent,
    CardFilmeComponent,
    LoginComponent,
    CadastroFilmeComponent,
    FormCadastroFilmesComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(), 
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
