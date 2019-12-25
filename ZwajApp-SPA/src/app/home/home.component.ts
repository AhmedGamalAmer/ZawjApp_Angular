import { Component, OnInit } from '@angular/core';
//اضافه ال namespace لاجل private http:HttpClient 
import { HttpClient } from '@angular/common/http';

@Component({
  //copy app-home to  app.component.html
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //propirty لظهار واخفاء ال register 
  registerMode:boolean=false;


  //values:any;  

  //نكتب دى private http:HttpClient 
  constructor(private http : HttpClient) { }

  ngOnInit() {
    //هشان تبدأ مع التنفيذ
    //this.getValues();
  }

  //داله اظهار واخفاء ال register
  registerToggle(){
    // this.registerMode=!this.registerMode;
   
    //عشان يظهر صفحه اللى فيها ليس الان
    this.registerMode=true;

    //عايز لما اضغط على ليس الان يخليها ب false
  }


//داله ال type script ليس بها كلمه function
//  getValues(){
//   this.http.get('http://localhost:49934/api/values').subscribe(
//   response=>{this.values=response;},
//   error=>{console.log(error);}
//   )
//   }

  //ال function هتستقبل boolean
  cancelRegister(mode:boolean){
  //propirty لظهار واخفاء ال register 
  //egisterMode:boolean=false;
   this.registerMode=mode;

  }
}
