import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FbsettingsPage } from '../fbsettings/fbsettings';
import { PreferencesPage } from '../preferences/preferences';
import { AboutPage } from '../about/about';
/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  toFBSettings() { this.navCtrl.push(FbsettingsPage) }
  toPreferences(){ this.navCtrl.push(PreferencesPage) }
  toAbout(){ this.navCtrl.push(AboutPage) }
}
