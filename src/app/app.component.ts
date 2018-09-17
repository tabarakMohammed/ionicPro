import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any //= TabsPage;

  constructor(public auth : AngularFireAuth,
    platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


    auth.authState.subscribe(user => {

    if(user){
      localStorage.setItem("myId",user.uid);
    //  localStorage.setItem("lo","yes")
       this.rootPage = TabsPage
       }
      else {
       this.rootPage = LoginPage

      // localStorage.setItem("lo","no")

      } 

    })


    
  }
}