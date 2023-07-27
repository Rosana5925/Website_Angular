import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Balance } from './balance';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  totalsald:number=0;

  //Aqui passo o Router como parametro para que possa fazer o roteameamento das páginas 
  constructor(private router: Router) { }

  //Método que vai fazer a adição do valor depositado na conta em questão
  makedeposit(balance: Balance){
   
  //Adicionar o valor depositado ao valor total
   this.totalsald=this.totalsald + balance.account_balance;

   //Verificar se o mesmo está sendo verificado
   console.log(this.totalsald);

   //Alerta de sucesso
   alert('Successfully Deposited!');

   //Após clicar no 'ok' és direcionado para a página de histórico de transações
   this.router.navigate(['history']);

  }

  //Método que vai fazer a subtração do valor transferido na conta em questão
  maketransfer(balance: Balance){

    //Verificar se tem saldo disponivel para fazer a transferência 
    if(this.totalsald> 0){

    //Subtraír o valor transferido ao valor total da conta
    this.totalsald=this.totalsald - balance.account_balance;

    //Verificar se o mesmo está sendo verificado
    console.log(this.totalsald);

    //Alerta de sucesso
    alert('Amount Transfer successful!');

    //Após clicar no 'ok' és direcionado para a página de histórico de transações
    this.router.navigate(['history']);


    //Caso não tenha saldo Disponivel é lançado uma alerta de insucesso
    } else

          alert('Impossible To Transfer!');

          //Depois é és direcionado para a página de histórico de transações
          this.router.navigate(['history']);

  }

  //Método que devolve o total do saldo disponivel
  getTotal(){
    return this.totalsald;
  }
}
