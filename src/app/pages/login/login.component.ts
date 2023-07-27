import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import {User} from './user'; 
import { AppComponent } from 'src/app/app.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
 
 user: User={name:'usuario', number: 1010, pass:'1234'};
 

  constructor(private authservice: AuthService, private navbar: AppComponent){

    //Outra tentativa de fazer desaparecer a navbar 
   // this.navbar.showMenu=false;
  }

  //Método que chama o método do método que autentica o utilizador  
  login(){

    //Verificação no console se o objeto está a receber os parametros digitados no input
    //console.log(this.user);

    //Aqui chamo o metodo da classe de autenticação que faz a autenticação do utilizador
    this.authservice.todo_login(this.user);
  }
}
