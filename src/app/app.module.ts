import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAJb6viJRRJljcC8js8szKq3364cbNpCbE",
  authDomain: "quizapp-34a7b.firebaseapp.com",
  databaseURL: "https://quizapp-34a7b.firebaseio.com",
  projectId: "quizapp-34a7b",
  storageBucket: "",
  messagingSenderId: "312887026369",
  appId: "1:312887026369:web:bfcac3ee4bed04ee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]


  
})
export class AppModule {}
