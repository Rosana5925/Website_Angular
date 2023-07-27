import { EventEmitter, Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private userAuth: boolean= false;
  showMenuEmiter= new EventEmitter<boolean>();
 
  constructor(private router: Router) { }

  /*
  getlogged(): boolean { 
    return this.userAuth;

  }
*/
 
  /*Autenticação de utilizador de forma estático. 
  Se tivesse uma api, aqui enviaria os dados para ele validar*/
  todo_login(user:User){
     
    //validação manual do utilizador, se ele for esse utilizador
    if(user.number === 1010 && user.pass === '1234'){

      //Aqui o userAuth muda o valor para true
      this.userAuth=true;
      //Lança um emiter a dizer para mostrar a navbar
      this.showMenuEmiter.emit(true);
      //Depois és direcionado para a pagina dos históricos
      this.router.navigate(['history']);
    }

    //se não for o utilizador 
      else

      //Aqui o userAuth muda o valor para false
      this.userAuth=false;
      //Lança um emiter para não mostrar a navbar
      this.showMenuEmiter.emit(false);

  }
}
