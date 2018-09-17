import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { data } from '../../model/model';




@Injectable()
export class PassProvider {


  //itemsRef: AngularFireObject<any>;

   private listRef = this.db.list('items');
   private itemsRef = this.db.object('items');

  
  constructor(public db: AngularFireDatabase) {
    console.log('Hello PassProvider Provider');

   // this.itemsRef = this.db.object('items');
  }

  
  gtDat() {
 
    return this.listRef = this.db.list('items');
          
                 
   }

 gitData() {
 
  return this.itemsRef = this.db.object('items');
        
               
 }

 


  addData( dataModel : data ) {

    return this.listRef.push(dataModel)

  }
  

  editData( dataModel : data ) {

    return this.listRef.update(dataModel.key,dataModel)
  }
  

  deleteData( dataModel ) {
    
    return this.listRef.remove(dataModel)


  }
  




  



}

