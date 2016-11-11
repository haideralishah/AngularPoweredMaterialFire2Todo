import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoOutputComponent } from './todo-output/todo-output.component';


// -------------Firebase config

export const firebaseConfig = {
  apiKey: "AIzaSyDpCh6ED4zqd7eHCllmeg7GtV_zakOgpjg",
  authDomain: "ng2materialtodo.firebaseapp.com",
  databaseURL: "https://ng2materialtodo.firebaseio.com",
  storageBucket: "ng2materialtodo.appspot.com",
  messagingSenderId: "899610937783"
};

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoOutputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    MaterialModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
