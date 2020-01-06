//authService هى الرابط بين ال API و ال SPA 


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from "rxjs/operators";

import {JwtHelperService} from '@auth0/angular-jwt';


// لن يتم استخدام ال services اللا لما نعمل تصريح داخل ال app.module.ts ال root 
@Injectable({
  providedIn: 'root'
})
export class AuthService {


jwtHelper =new JwtHelperService();

//ال link اللى هربط معاه : ال Domain
baseUrl='http://localhost:49934/api/Auth/';


//هنعمل متغير يحمل القيمه المشفره اللى احنا هنجبها من ال JWT Helper Service
decodedToken:any;

//http:HttpClient اللى بتمكنى من اننى اربط مع ال Client
constructor(private http:HttpClient) { }

//return observable stream of data 
login(model:any){
  //http.post
  //model : username , password
  //ال return observable
  return this.http.post(this.baseUrl + 'login' ,model)
  //observable : pipe عباره عن انبوب بعد الربط بال api
  //من مكتبه RxJS:Reactive Extensions Library for JavaScript  https://rxjs-dev.firebaseapp.com/
  //RxJS بنستخدمها لان الشغل داخل ال api عباره عن asyncronis  وده معناه يا اما فيه Success يااما فيه Error فى ال data اللى جايه
  .pipe(
    //احنا عايزين نستلم ال Token ونخزنه فى ال localStorage مثل ال session لها وقت محدد و Expierd Date او بتنتهى اول ما الشخص يقفل ال browser
    //لكن ال localStorage  متخزنه داخل  orgain = domin = localhost Important
   
    //map
    //const array1 = [1, 4, 9, 16];
    // pass a function to map
    //const map1 = array1.map(x => x * 2);
    //console.log(map1);
    // expected output: Array [2, 8, 18, 32]

    //https://rxmarbles.com/#map
    //بيتعامل مع ال stream بيستلمها ويطبق عليها function معينه ويرجع يسلم ال observale الجديد
    map((response:any)=>{
      //const user لانه هيستخدم مره واحده فقط داخل ال localStorage
      const user=response;
      //Object {key : value}
      //user ال Object اللى شايل ال token
      //localStorage .setItem  بتخزن العنصر من خلال key & Value 
      //localStorage .removeItem ازاله باسم ال Key
      //localStorage .getItem لما اعوز استدعيه واستخدمه فى اى sendData or GetData
      //localStorage .clear اشيل اى حاجه مخزنه فى localStorage

      //عايز اخزن ال obj اللى داخل ال token
      //user.token بدخل داخل ال token واخد ال obj
      if(user){localStorage.setItem('token',user.token);
    this.decodedToken=this.jwtHelper.decodeToken(user.token);
    console.log(this.decodedToken);
  }
  }))

    }

    //register 45-04-10
    register(model:any){

      return this.http.post(this.baseUrl+'register',model);
    }

    LoggedIn(){
      try{

      
      const token=localStorage.getItem('token');
      //لو مش Expired يبعته
      return ! this.jwtHelper.isTokenExpired(token)
    }
    catch{
      return false

    }
    }
}
