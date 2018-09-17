import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ErorrPage } from '../erorr/erorr';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  cur = {
eml : "" ,
pwd : "" ,
emr : "" ,
pwr : ""
  }
addrass : string

  constructor( public aauth : AngularFireAuth , 
     public navCtrl: NavController,
     public navParams: NavParams,
     public alrt :AlertController) {


       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  


  log(cur ){

    this.aauth.auth.signInWithEmailAndPassword(cur.eml,cur.pwd)
   .catch(
      
      error => {


        const alert = this.alrt.create({
          title: 'خطأ',
          subTitle: "البريد الألكتروني أو الرقم السري الذي أدخلتة خطأ",
          buttons: ['OK']
        });


        alert.present();

      }

    
    )//.then(()=>{
       // this.navCtrl.setRoot(TabsPage);
        /** 
        .then(()=>{
            this.navCtrl.setRoot(TabsPage);
  
        })
       // this.navCtrl.setRoot(MyApp);
       // this.navCtrl.push(this.navCtrl.getActive().component);
       */
     // });
    //console.log(cur.eml + cur.pwd)
      
  }


  reg(cur){

    this.aauth.auth.createUserWithEmailAndPassword(cur.emr, cur.pwr)
    //.then(
    //  ()=> this.navCtrl.setRoot(TabsPage) )
   //  console.log(cur.emr + cur.pwr)
   .catch(
      
    error => {


      const alert = this.alrt.create({
        title: 'أدخالك خاطئ',
        subTitle: error,
        buttons: ['OK']
      });


      alert.present();

    }

  
  ) 
    
  }












  show(emr , pwr) {

    let prompt = this.alrt.create({
      title: 'التسجيل',
      message: "تسجيل البريد الألكتروني ",

      inputs: [
        {
          name: 'email',
          value:  emr,
          placeholder: 'البريد الألكتروني'

        },
        {
          name: 'password',
          value:  pwr,
          placeholder: 'الرقم السري'

        },
       
      ],

      buttons: [
        {

          text: 'ألغاء',
         
        },
        {
          text: 'تسجيل',
          handler: save => {
           this.cur.emr = save.email
           this.cur.pwr = save.password
           //console.log("save :" + save.email + save.password )
           //console.log("CUR :" + this.cur.emr + this.cur.pwr  )

           this.reg(this.cur)
          }
        }
      ]
    });

    prompt.present();

  }
 



  problemLogin(){

    console.log("hello from login edit")

    let promp = this.alrt.create({
      title: 'مشكلة في تسجيل الدخول',
      message:" سيتم أرسال رسالة تهيئة الى بريدك الألكتروني",

      inputs: [
        {
          name: 'mail',
         // value:   this.addrass ,
          placeholder: 'البريد الألكتروني'

        },
        
       
      ],

      buttons: [
        {

          text: 'ألغاء',
         
        },
        {
          text: 'أرسال',
          handler: send => {
            this.addrass = send.mail
           
           //console.log("send :" + send.mail  )
          // console.log("address :" + this.addrass )
           this.p(this.addrass)
       
          
          }
        }
      ]
    });

    promp.present();

  }
 



 

    p(add){
   this.aauth.auth.sendPasswordResetEmail(add)
   .catch(()=>{
    this.addrass = ""

      
        localStorage.setItem("check","bad")
        
         // this.navCtrl.push(ErorrPage)
      
    });
   
      // Email sent.
      this.addrass = ""
      localStorage.setItem("check","good")
      this.navCtrl.push(ErorrPage)

      

    
      // An error happened.
    
    
  }











  }











