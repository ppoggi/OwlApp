import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { University } from '../../services/university/university';
import { Storage } from '@ionic/storage';
import { StorageHandler } from '../../lib/storage/storage.handler';
import { Events } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ProfessorsPage } from '../professors/professors';
import { DepartmentsPage } from '../departments/departments';
import { LabsPage } from '../labs/labs';



@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  item: University;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public storage: Storage, public events: Events,
     public modalCtrl: ModalController) {

    this.item = navParams.get('item');
  }
  ionViewDidLoad() {
    this.events.subscribe("dbList:update", () => {

    });
  }
  addFavorite(){
    this.item.saved = "yes";
    this.updateList();
  }
  removeFavorite(){
    this.item.saved = "no";
    this.updateList();
  }
  toDepartments(item,title){
    console.log(item)
    let modal = this.modalCtrl.create(DepartmentsPage,{departments:item, title:title},{enableBackdropDismiss:false});
    modal.present();

  }
  toProfessors(professors){

  }
  toLabs(labs){

  }
  updateList(){
    this.storage.ready().then(() => {
       this.storage.get("dbList").then((oldList) => {
         const storageHandler = new StorageHandler();
         const updatedList = storageHandler.updateUniversityList(this.item, oldList);
         console.log(updatedList, this.item);
         this.storage.set("dbList", updatedList);
         this.events.publish("dbList:update");
       })
     });
  }
}
