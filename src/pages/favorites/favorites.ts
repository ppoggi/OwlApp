import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DetailsPage } from '../details/details';
import { University } from '../../services/university/university';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  universities: University[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public events: Events) {

    storage.ready().then(() => {
       storage.get("dbList").then((val) => {
         this.universities = val;
       })
     });
  }
  ionViewDidLoad() {
    this.events.subscribe("dbList:update", () => {
      this.refreshData();
    })
  }
  refreshData(){
    this.storage.get("dbList").then((val) => {
      this.universities = val;
    })
  }
  itemSelected(item){
    this.navCtrl.push(DetailsPage,{item:item});
  }
}
