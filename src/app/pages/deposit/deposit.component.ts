import { Component } from '@angular/core';
import { Balance } from './balance';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})

export class DepositComponent {

 
  balance: Balance={account_number:1010, account_balance:0 }
 
  //Aqui passo a classe de autenticação  como parametro para poder fazer o roteamento e passagem de informação
  constructor(private authservice: AuthService) {}

  //Método para realizar o Deposito
  makeDeposit(){

     //Aqui chamo o metodo da classe de autenticação que faz a adição do valor depositado no valor total da conta em questão
    this.authservice.makedeposit(this.balance);

    //verifico no console se o objeto está a receber os parametros digitados no input
    //console.log(this.balance);

  }

}
