import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';


/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  registerPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.registerPage = 'Register';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
