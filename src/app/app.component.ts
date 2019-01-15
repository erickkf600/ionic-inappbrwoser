import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, iab: InAppBrowser) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      iab.create('http://accio-app.rf.gd/','_self',{zoom:'no',location:'no'});
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

