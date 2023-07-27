import { Component } from '@angular/core';
import { AuthService } from './pages/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FutureBank';

  showMenu: boolean=true;

  constructor(private authservice: AuthService){

  }

  //Metodo que recebe o resultado do emitter, se é true ou false
  ngOnInit(){
   // this.showMenu=this.authservice.getlogged();
  this.authservice.showMenuEmiter.subscribe(show => this.showMenu = show);
 
  }
}
