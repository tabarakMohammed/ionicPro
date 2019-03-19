import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { MapPage } from '../pages/map/map';
import { AddPage } from '../pages/add/add';
import { EditPage } from '../pages/edit/edit';
import { LoginPage } from '../pages/login/login';
import { ErorrPage } from '../pages/erorr/erorr';
import { AboutusPage } from '../pages/aboutus/aboutus';





import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PassProvider } from '../providers/pass/pass';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';



var config = {
  apiKey: "key",
  authDomain: "authformfire",
  databaseURL: "url",
  projectId: "sds",
  storageBucket: "asa",
  messagingSenderId: "dfd"
};


@NgModule({
  
  declarations: [
    MyApp,
    MapPage,
    AddPage,
    EditPage,
    TabsPage,
    LoginPage,
    ErorrPage,
    AboutusPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    AddPage,
    EditPage,
    TabsPage,
    LoginPage,
    ErorrPage,
    AboutusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PassProvider,
    AngularFireAuth,
    AngularFireDatabase
  ]
})
export class AppModule {}
