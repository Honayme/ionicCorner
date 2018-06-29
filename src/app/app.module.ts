import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {IadvertService} from '../services/iadvert.service';
import { IauthService} from '../services/iauth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import {MyAdvert} from '../pages/my-advert/my-advert';
import {AuthInterceptorService} from '../services/iauthInterceptor.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MyAdvert
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyAdvert
  ],
  providers: [
    IadvertService,
    IauthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class AppModule {}
