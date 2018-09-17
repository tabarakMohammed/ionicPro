import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { data } from '../../model/model';
import {PassProvider} from '../../providers/pass/pass';
import { MapPage } from '../map/map';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

data:data={
  info : "",
  lt : "",
  lg :  "" ,
  id : ""
}
 msg : string
  constructor(public pr:PassProvider, public alertCtrl: AlertController,
     public navCtrl: NavController, public navParams: NavParams,
     public at :  AngularFireAuth) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');

  }
  addLocation(data:data){
    if (data.info == "" || data.lg == "" || data.lt == "" ){


     
      const alert = this.alertCtrl.create({
        title: 'خطأ',
        subTitle: 'الرجاء أدخال البيانات كاملة',
        buttons: ['OK']
      });


      alert.present();



    }

    else {
      
    this.data.id = localStorage.getItem("myId")
    this.pr.addData(data) //.then(ref =>{
     this.showAlert()
      //this.navCtrl.setRoot(MapPage)

       // })
   }


  }





    showAlert() {
      let alert = this.alertCtrl.create({
        title: ' تم بنجاح ',
        subTitle: 'شكرا لمساعدة الناس',
        buttons: [
          {
          text: 'الى الخريطة',
          handler: data => {

           this.data.info="";
           this.data.lg="";
           this.data.lt="";

            this.navCtrl.push(MapPage);



          } 
        },
        {
        text: 'أبقى',
        handler: data => {

         this.data.info="";
         this.data.lg="";
         this.data.lt="";




        } 
      }
      ]

        






       
      });

      
      alert.present();
    }
    

    logout(){

       this.at.auth.signOut();
       //.then( () =>{
       // localStorage.setItem("lo","no")
        //this.navCtrl.setRoot(LoginPage);

       // this.navCtrl.setRoot(LoginPage)
        /** 
        .then(()=>{
          this.navCtrl.setRoot(LoginPage);


        })
        */
      //  this.navCtrl.isActive

      // });
      

    }
  






  }



