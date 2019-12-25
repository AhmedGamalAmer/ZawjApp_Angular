import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule  } from '@angular/common/http';
//نضيف ال FormsModule
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
//import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { from } from 'rxjs';
// بيعمل auto Import بمجرد اضافه ال AuthService فى ال providers
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

//عشان نستخدمه فى ال providor
import { ErrorInterceptorProvider } from './_services/error.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      //ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      //ونعملهاimport\\n
      FormsModule
   ],
   // نضيف ال AuthService
   //كده جاهز استخدامها
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
