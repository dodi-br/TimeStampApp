import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-stamp-detail',
  templateUrl: 'stamp-detail.html',
})
export class StampDetail {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  openPageProfile(){
    this.navCtrl.push(Profile);
  }

}
