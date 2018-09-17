import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { data } from '../../model/model';
import {PassProvider} from '../../providers/pass/pass';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {


  data:data={
    key:"",
    info : "",
    lt : "",
    lg :  "" 
  }
 
  myObject = <any>[];
 
   id 
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public pr:PassProvider,public alertCtrl: AlertController) {
     
      this.loadData()
      this.id =  localStorage.getItem("myId")
  }
         
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');


  }

 


loadData() {



   this.pr.gitData().snapshotChanges().subscribe(actions =>{
          
          if (actions.payload.val() == null || actions.payload.val() == undefined) {
           console.log('no data' )

          } else { 

           this.myObject = Object.entries(actions.payload.val())
          


        
       
        }

         });

        


        }


        //reload data
Reload(){
  this.navCtrl.setRoot(this.navCtrl.getActive().component);
}

//............ EditMethod
  edit(d : data)
  {
   this.pr.editData(d).then( ()=>{
    this.navCtrl.push(TabsPage)
    this.navCtrl.setRoot(this.navCtrl.getActive().component);

   })
   console.log("تعديل")
  }


  //........... DeleteMethod
  delete(d:data){
    this.pr.deleteData(d).then( ()=>{
     this.navCtrl.push(TabsPage)
     this.navCtrl.setRoot(this.navCtrl.getActive().component);

    })

    console.log("مسح")

  }





///...... show Alart for get data from user
   show( key , info , lt , lg ) {

    let prompt = this.alertCtrl.create({
      title: 'تعديل',
      message: "التعديل على المعلومات الحالية ",

      inputs: [
        {
          name: 'Info',
          value:  info
        },
        {
          name: 'Latitude',
          value:  lt
        },
        {
          name: 'Longitude',
          value:  lg
        },
      ],

      buttons: [
        {

          text: 'Cancel',
         
        },
        {
          text: 'Save',
          handler: save => {
           this.data.info = save.Info
           this.data.lt =   save.Latitude
           this.data.lg =   save.Longitude
           this.data.key  = key 
           this.edit(this.data)
          }
        }
      ]
    });

    prompt.present();

  }
 





}
