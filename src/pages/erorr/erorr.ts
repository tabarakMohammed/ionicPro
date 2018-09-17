import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ErorrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-erorr',
  templateUrl: 'erorr.html',
})
export class ErorrPage {
ck
msg : boolean
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  this.ck=localStorage.getItem("check")
  if(this.ck == "good"){

   this.msg = true

  } else  {

    this.msg= false

  }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErorrPage');
  }
 
  goBack(){

this.navCtrl.push(LoginPage).then(()=>{

 // localStorage.setItem("check","")

})

  }



}
