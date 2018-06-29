import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {IadvertService} from '../../services/iadvert.service';
import {Adverts} from '../../../models/iadvert';
import {MyAdvert} from '../my-advert/my-advert';

/**
 * Generated class for the AdvertForm page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-advert-form',
  templateUrl: 'advert-form.html',
})
export class AdvertForm {

  advert: Adverts;
  advertImage = '';
  myAdvert: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public advertService : IadvertService,
              private toastCtrl: ToastController) {

    this.advert = this.navParams.data;
    this.myAdvert = MyAdvert;

    if (Object.keys(this.advert).length !== 0
      && this.advert.constructor === Object) {
      this.advertImage = this.advert.picture;
    } else {
      this.advert = {
        title: '',
        desc: '',
        price: 0,
        zip: 0,
        picture: '',
      };

    }
  }

  onSubmit(): void {
    const advert: Adverts = {
      title: this.advert.title,
      desc: this.advert.desc,
      price: this.advert.price,
      zip: this.advert.zip,
      picture: this.advertImage
    };

    if (this.advert.id) {
      console.log("update");
      this.advertService.updateAdvert(this.advert).subscribe(
        (advert) => {
          this.navCtrl.push(this.myAdvert);

          this.toastCtrl.create({
            message : `L'annonce ${advert.title} a été modifiée.`,
            duration: 5000,
            position: 'top'
          }).present();
        },
        () => this.toastCtrl.create({
          message : 'Une erreur s\'est produite lors de la modification de l\'annonce.',
          duration: 5000,
          position: 'top'
        }).present());
    } else {

      this.advertService.createAdvert(advert).subscribe(
        () => this.navCtrl.push(this.myAdvert),
        () => this.toastCtrl.create({
          message : 'Une erreur s\'est produite lors de la création de l\'annonce.',
          duration: 5000,
          position: 'top'
        }).present());
    }

  }

  remove(advert: Adverts): void {
    this.advertService.deleteAdvert(this.advert.id).subscribe(
      (advert) => this.toastCtrl.create({
        message : `L'annonce a bien été supprimée.`,
        duration: 5000,
        position: 'top'
      }).present(),
      () => this.toastCtrl.create({
        message : 'Une erreur s\'est produite lors de la modification de l\'annonce.',
        duration: 5000,
        position: 'top'
      }).present());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertForm');
  }


  //IMAGE
  onChangeImage(event): void {
    const myReader = new FileReader();

    myReader.readAsDataURL(event.target.files[0]);

    myReader.onloadend = () => {
      this.advertImage = myReader.result;
    };
  }

}
