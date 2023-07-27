import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Importar os componentes Gerados no Angular */

import { LoginComponent } from './pages/login/login.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import{CashtransferComponent} from './pages/cashtransfer/cashtransfer.component'
import{HistoryComponent} from './pages/history/history.component'

const routes: Routes = [

  /*Adicionar as rotas da web*/
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'deposit',
    component: DepositComponent
  },
  {
    path:'cashtransfer',
    component: CashtransferComponent
  },
  {
    path:'history',
    component: HistoryComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
