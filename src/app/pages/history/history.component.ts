import { Component } from '@angular/core';
import { AuthService } from '../deposit/auth.service';
import { Transaction } from './transaction';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  
  account_balance: number=0;


//Criei um array de transações só para simular uma lista, pois aqui precisaria de uma Base de Dados.
  transaction: Transaction []=[

    {type:'debit',toAccount:1010,amount:10},
    {type:'credit',toAccount:1010,amount:12}
  
  ];
 
  //Aqui passo a classe de autenticação para poder fazer o roteamento e passagem de informação.
  constructor(private authservice: AuthService){

    //Passo o valor total da conta para a variavel account_balance para ser exibida na tela.
    this.account_balance= authservice.getTotal();

  }

  

}
