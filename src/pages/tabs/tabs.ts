import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { AddPage } from '../add/add';
import { EditPage } from '../edit/edit';
import { AboutusPage } from '../aboutus/aboutus';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
 
  // tab1Root : any ;  
/// tab3Root : any ;
  tab1Root = AddPage;
  tab2Root = MapPage;  
  tab3Root = EditPage;
  tab4Root = AboutusPage;


  constructor( ) {
   /** 
    this.auth.authState.subscribe(auth=>{
      if(auth){
    
        // localStorage.setItem("myId",auth.uid);
    
                  this.tab1Root = AddPage
               //   this.tab3Root = EditPage;
    
               }
         else 
              {
    
               // this.tab1Root = LoginPage;
              //  this.tab3Root = LoginPage;
    
             }
    
       })
    

*/



  }
}
  
 /** 
  
   
*/




  



