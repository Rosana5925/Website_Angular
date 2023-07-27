import { Component } from '@angular/core';
import { Balance } from '../deposit/balance';
import { AuthService } from '../deposit/auth.service';


@Component({
  selector: 'app-cashtransfer',
  templateUrl: './cashtransfer.component.html',
  styleUrls: ['./cashtransfer.component.css']
})
export class CashtransferComponent {

  balance: Balance={account_number:1010, account_balance:0 }

  //Aqui passo a classe de autenticação para poder fazer o roteamento e passagem de informação
  constructor(private authservice: AuthService){}

  //Método para realizar a transferência
  maketransfer(){

    //Aqui chamo o metodo da classe de autenticação que faz a subtração do valor transferido no valor total da conta em questão
    this.authservice.maketransfer(this.balance);

    //verifico no console se o objeto está a receber os parametros digitados no input
    //console.log(this.balance);

  }

}
