import { Component, OnInit } from '@angular/core';

//AutoImport
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  //بيمثل ال selector اللى بيستخدم ك tag داخل ال appcommponent
  selector: 'app-nav',
  //بيمثل ال Design
  templateUrl: './nav.component.html',
  //بيمثل ال Style
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //  لو مش عارف النوع اللى جاى من ال api 
  //model is proparity هيتم تخزين فيه ال username & password اللى جايين من ال nav.component.html
  model : any ={};
  //كده عملنا ال model وهنضيف فيه two keys (username , password)
  //والاضافه اللى هتم هتم فى ال html

  //كده انا عملت injection لل AuthService

  //لازم اضيف ال alertify داخل ال constructor
  constructor(public authService:AuthService, private alertify:AlertifyService) { }

  ngOnInit() {
  }
  //function
  login(){
    //console.log(this.model)

    //هنعرض من خلال ال login
    //هيرجع observable اذا لازم اعمل subscribe
    //ال subscribe بتنفذ 3 حاجات 
    //فى حاله النجاح - فى حاله الايرور - فى حاله الانتهاء من المهمه
    this.authService.login(this.model).subscribe(
      //next=>{console.log('تم الدخول بنجاح')},
      next=>{ this.alertify.success('تم الدخول بنجاح')},

      //error=>{console.log('فشل فى الدخول')}
      //error=>{console.log(error)}
      error=>{this.alertify.error(error)}

      //complete=>{console.log(' ')}
      
    )
  }


//41-04-06-إستخدام ngIf  الشرطية في إظهار عناصر  HTML  
//اول ما الشخص بيعمل login ويتوافق عليه كان ال authService يقوم بعمل token من خلال ال api 
// وال authService كان بيخده ويسلمه داخل ال localStorage
//اذا كان هناك token بيقى الشخص مصرح له الدخول ويظهر مرحبا بك
//اذا كان ليس هناك token  فيظهر ال form ولا يظهر مرحبا بك

//return boolean
//دى الداله اللى بستخدمها عشان اشوف فى token ولا لا
//واذا كان الشخص عمل loggedin ولا لا
//وانا عايز استخدمها عموما
//مش من صلاحيات اى component انى اعمل inject داخل component تانى
//الحل عن طريق ال services 
loggedIn(){
  //  const token=localStorage.getItem('token');
  //  //!! معناها لو ال token موجود يرجع ب true لو مش موجود يرجع ب false
  //  return !! token

  return this.authService.LoggedIn();
  }

//method تانيه خاصه الخروج
//لو الشخص ضغط تسجيل خروج احذف ال token
// افضى ال localStorage
loggedOut(){
  localStorage.removeItem('token');
  //console.log('تم الخروج');
  this.alertify.message('تم الخروج');

}

//------------------------------------------

  //عايزين نعمل two pinding مابين ال ts file ومابين الصفحه
  
}
