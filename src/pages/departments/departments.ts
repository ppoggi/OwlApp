import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the Departments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-departments',
  templateUrl: 'departments.html'
})
export class DepartmentsPage {

  departments:any;
  title:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.departments = navParams.get('departments');
    this.title = navParams.get('title');
  }

  ionViewDidLoad() {

  }

  closeDepartments() {

    this.viewCtrl.dismiss();
  }

}
