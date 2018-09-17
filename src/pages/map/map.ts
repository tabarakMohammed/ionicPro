import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PassProvider} from '../../providers/pass/pass';
import { data } from '../../model/model';


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})



export class MapPage {

  google: any;
  map : any;

  array = [];
 // keyy = <any>[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
     public ps : PassProvider,
     ) {
    
     //  this.marker();
  
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.initMap();

  }

   
  
  
  

   initMap() {
   
    this.map = new google.maps.Map(document.getElementById('googleMap'), {
      center: {lat:  33.2232, lng: 43.6793 },
      zoom: 6,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    });

    
  
 // }

//marker(){
  
/** 
  this.ps.itemsRef.snapshotChanges().subscribe( a =>{ 

  this.array.push( a.payload.toJSON())
   this.keyy = Object.keys(this.array[0])
  

    for (var i = 0; i < this.keyy.length; i++)
{
  var lating = new google.maps.LatLng(this.array[0][this.keyy[i]].lt,
    this.array[0][this.keyy[i]].lg)
  var con = this.array[0][this.keyy[i]].info
*/

this.ps.gtDat().snapshotChanges().subscribe(actions => {
  actions.forEach(action=>{
    let y = action.payload.toJSON()
    y['key'] = action.key
    this.array.push(y as data)
  })
  
  for (const value of this.array) {
    let marker = new google.maps.Marker({
    position : new google.maps.LatLng(value['lt'],value['lg']),
    map: this.map,
    title :  value['info']
  });

  let infowindow = new google.maps.InfoWindow({
  content :  value['info']
  });

   marker.addListener('click', function() {
   this.map.setZoom(12);
   this.map.setCenter(marker.getPosition());
   infowindow.open(this.map, marker);
   });





 
  }

  })




}


}












