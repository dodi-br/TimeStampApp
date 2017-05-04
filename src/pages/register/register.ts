import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  private email:string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  register(){
    console.log(this.email);
    this.navCtrl.pop();
  }

}
