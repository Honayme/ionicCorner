import { Component } from '@angular/core';
$IMPORTSTATEMENT

/**
 * Generated class for the AdvertForm page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
$IONICPAGE
@Component({
  selector: 'page-advert-form',
  templateUrl: 'advert-form.html',
})
export class AdvertForm {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertForm');
  }

}
