import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Adverts} from '../../../models/iadvert';
import {IadvertService} from '../../services/iadvert.service';
import {Subscription} from 'rxjs/Subscription';
import {IauthService} from '../../services/iauth.service';
import {AdvertDetail} from '../advert-detail/advert-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  advert: Adverts[];
  advertDetail: any;
  subscriptions: Subscription[] = [];
  logPage: any;
  loggedIn: any;


  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private iadvertService: IadvertService,
              private iauthservice: IauthService) {

    this.advertDetail = AdvertDetail;
    this.logPage = 'Login';

    this.subscriptions.push(this.iadvertService.getAll().subscribe(
      adverts => this.advert = adverts
    ));

  }

  logOut(){
    this.iauthservice.logout();
  }


}
