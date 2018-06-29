import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import {Adverts} from '../../../models/iadvert';
import {IadvertService} from '../../services/iadvert.service';
import {Subscription} from 'rxjs/Subscription';
import {AdvertForm} from '../advert-form/advert-form';
import {AdvertDetail} from '../advert-detail/advert-detail';

@Component({
  selector   : 'my-advert',
  templateUrl: 'my-advert.html'
})
export class MyAdvert {
  adverts: Adverts[];
  subscriptions: Subscription[] = [];
  advertForm: any;
  advertDetail: any;



  constructor(private navParams: NavParams,
              public iadvertService: IadvertService) {

    this.advertForm = AdvertForm;
    this.advertDetail = AdvertDetail;

    this.subscriptions.push(this.iadvertService.getUserAdvert().subscribe(
      adverts => this.adverts = adverts
    ));


  }
}
