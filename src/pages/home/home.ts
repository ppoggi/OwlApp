import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MenuPage } from '../menu/menu';
import { DetailsPage } from '../details/details';
import { UniversityService }  from '../../services/university/university.service';
import { University } from '../../services/university/university';
import { Container } from '../../services/university/container';
import { UniversityListVersion }  from '../../services/university/university.list.version';


@Component({
  selector: 'page-home',
  providers: [UniversityService],
  templateUrl: 'home.html',
})
export class HomePage{

  universities: University[];

  constructor(public navCtrl: NavController, universityService:UniversityService, storage: Storage ) {
      storage.ready().then(() => {
        storage.get('dbVersion').then((val) => {
          if(!(val instanceof UniversityListVersion))
            val = {index: 0};
          let dbObj:Container = universityService.getUniversities(val);
          this.universities = dbObj.dbList;
          storage.set('dbList', dbObj.dbList );
          storage.set('dbVersion', dbObj.dbVersion );
      })
    });
  }
  itemSelected(item){
    this.navCtrl.push(DetailsPage,{item:item});
  }
}
