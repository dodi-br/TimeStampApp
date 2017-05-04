import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Leavelist } from '../leavelist/leavelist';
/**
 * Generated class for the Leave page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-leave',
  templateUrl: 'leave.html',
})
export class Leave {
  
  constructor(public modal: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  openModalpage() {
    this.navCtrl.push(Leavelist);
  }
   openHomepage() {
    this.navCtrl.pop();
  }

}

