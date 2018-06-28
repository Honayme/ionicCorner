import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Adverts} from '../../../models/iadvert';
import {IadvertService} from '../../services/iadvert.service';
import {Subscription} from 'rxjs/Subscription';
import {Login} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menuData = [
    {title: 'Our Adverts', pic:'assets/img/logo.png', pushPage: 'MenuPage'},
    {title: 'My Adverts', pic:'assets/img/logo.png', pushPage: 'MenuPage'},
    {title: 'Login', pic:'assets/img/logo.png', pushPage: 'MenuPage'},
  ];

  advert: Adverts[];
  subscriptions: Subscription[] = [];
  logPage: any;


  constructor(public navCtrl: NavController, private iadvertService: IadvertService) {
    this.logPage = 'Login';

    this.subscriptions.push(this.iadvertService.getAll().subscribe(
      adverts => this.advert = adverts
    ));

  }

}
