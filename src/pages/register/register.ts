import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { HomePage } from '../home/home';
import {IauthService} from '../../services/iauth.service';

/**
 * Generated class for the Register page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {

  reg = {
    email:'',
    pwd1: '',
    pwd2: '',
    username: ''
  };

  registerData={
    email: this.reg.email,
    pwd: this.reg.pwd1,
    username: this.reg.username
  };

  loginData={
    email: this.reg.email,
    pwd: this.reg.pwd1
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private iauthservice: IauthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  displayAlert(alertTitle, alertSub){
    let alert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertSub,
      buttons: ['OK']
    });

    alert.present();

  }

  //Check password validity and then register
  registerAccount(){
    if (this.reg.pwd1 != this.reg.pwd2){
      this.displayAlert('Password Problem!', 'The passwords doesn\'t match, please try again');
      this.reg.pwd1 = '';
      this.reg.pwd2 = '';
    }
    else{
        this.iauthservice.registerUser(this.registerData);
      }

  }

  //Data pass in the register service and alert the user of the registration success
  registerSuccess(result){
    this.displayAlert(result.email, 'Well done you have created an account for this email address');
    this.iauthservice.logInUser(this.loginData);
    this.navCtrl.push(HomePage)
  }
}
