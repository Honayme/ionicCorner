import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Adverts} from '../../../models/iadvert';
import {IadvertService} from '../../services/iadvert.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  advert: Adverts[];
  subscriptions: Subscription[] = [];


  constructor(public navCtrl: NavController, private iadvertService: IadvertService) {

    this.subscriptions.push(this.iadvertService.getAll().subscribe(
      adverts => this.advert = adverts
    ));

  }

}