import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
// import { Register } from '../register/register';
import {IauthService} from '../../services/iauth.service';
import {HomePage} from '../home/home';


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

  login = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private iauthService: IauthService) {
    this.registerPage = 'Register';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  displayAlert(alertTitle, alertSub){
    let alert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertSub,
      buttons: ['OK']
    });

    alert.present();

  }

  signOn(){
    if(!this.login.email || !this.login.password){
      this.displayAlert('Error ! ', "You must enter email and password");
    }
    else{
      this.iauthService.logInUser(this.login);
      this.navCtrl.push(HomePage);
    }
  }

}
