import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import {Adverts} from '../../../models/iadvert';

@Component({
  selector   : 'advert-detail',
  templateUrl: 'advert-detail.html'
})

export class AdvertDetail {
  advert: Adverts;

  constructor(private navParams: NavParams) {
    this.advert = this.navParams.data;
    console.log(this.advert);
  }

  ionViewDidLoad(){
    this.navParams.get('title');
  }

}
