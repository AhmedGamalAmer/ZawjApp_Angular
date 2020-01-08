import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule  } from '@angular/common/http';
//نضيف ال FormsModule
import {FormsModule} from "@angular/forms";
//ngx Bootstrab
import { BsDropdownModule } from 'ngx-bootstrap';
//نخليه مع ال modules
import { RouterModule } from '@angular/router';

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
//import Alertify
import { AlertifyService } from './_services/alertify.service';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';

import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
   declarations: [
      AppComponent,
      //ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      //ونعملهاimport
      FormsModule,
      BsDropdownModule.forRoot(),

      RouterModule.forRoot(appRoutes)
   ],
   //نضيف الAuthService\\\\n//كده جاهزاستخدامها\\\\n
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
