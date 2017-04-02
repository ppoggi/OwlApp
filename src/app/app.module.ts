import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { FavoritesPage } from '../pages/favorites/favorites';
import { DetailsPage } from '../pages/details/details';
import { PreferencesPage } from '../pages/preferences/preferences';
import { FbsettingsPage } from '../pages/fbsettings/fbsettings';
import { AboutPage } from '../pages/about/about';
import { ProfessorsPage } from '../pages/professors/professors';
import { DepartmentsPage } from '../pages/departments/departments';
import { LabsPage } from '../pages/labs/labs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MenuPage,
    FavoritesPage,
    DetailsPage,
    PreferencesPage,
    FbsettingsPage,
    AboutPage,
    ProfessorsPage,
    DepartmentsPage,
    LabsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MenuPage,
    FavoritesPage,
    DetailsPage,
    PreferencesPage,
    FbsettingsPage,
    AboutPage,
    ProfessorsPage,
    DepartmentsPage,
    LabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
