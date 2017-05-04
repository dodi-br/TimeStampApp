import { Component } from '@angular/core';
import { App,NavController, MenuController } from 'ionic-angular';
import { Login } from '../login/login';
import { StampDetail } from '../stamp-detail/stamp-detail';
import { Register } from '../register/register';
import { Leave } from '../leave/leave';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(public app:App, public menu: MenuController, public navCtrl: NavController) {
    menu.enable(true);
    
    // let email = "mick@gmail.com";
    // let deviceID = "1234567890";

    let email = "";
    let deviceID = "";
    if(email == "" && deviceID == ""){
      // this.navCtrl.push(Login);
      this.app.getRootNav().push(Register);
      // this.app._setRootNav(Login);
      // this.navCtrl.setRoot(Login);
    }
    
  }

  showMenu() {
    this.menu.open(); 
  }

  openPage_stampDetail() {
    this.navCtrl.push(StampDetail);
  }
  openPage_login() {
    this.navCtrl.push(Login);
  }
  openPage_regis(){
  this.navCtrl.push(Register);
}
  openPage_leave(){
  this.app.getRootNav().push(Leave);

}
openPage_logout(){
  this.navCtrl.pop();
}
}
