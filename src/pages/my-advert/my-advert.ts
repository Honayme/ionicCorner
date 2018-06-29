import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import {Adverts} from '../../../models/iadvert';
import {IadvertService} from '../../services/iadvert.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector   : 'my-advert',
  templateUrl: 'my-advert.html'
})
export class MyAdvert {
  adverts: Adverts[];
  subscriptions: Subscription[] = [];


  constructor(private navParams: NavParams,
              public iadvertService: IadvertService) {

    this.subscriptions.push(this.iadvertService.getUserAdvert().subscribe(
      adverts => this.adverts = adverts
    ));


  }
}
