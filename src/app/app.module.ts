import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { CashtransferComponent } from './pages/cashtransfer/cashtransfer.component';
import { HistoryComponent } from './pages/history/history.component';
import{AuthService} from './pages/login/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DepositComponent,
    CashtransferComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
