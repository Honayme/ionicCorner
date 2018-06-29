import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertForm } from './advert-form';

@NgModule({
  declarations: [
    AdvertForm,
  ],
  imports: [
    IonicPageModule.forChild(AdvertForm),
  ],
})
export class AdvertFormModule {}
