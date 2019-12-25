import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // proparity مبتجيش غير من الاب
  //جايه من ال home
  // @Input() valuesFromRegister:any;

  //EventEmitter اللى جاى من angular4 هام جدا وانت بتختار
  @Output() cancelRegister= new EventEmitter()

  model: any = {};

  //injection register from Auth Services
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  //register function
  register() {
    //عشان يعرض الرساله دى
    //console.log('تم الإشتراك');
    //عشان يعرض ال username , password
    //console.log(this.model);

    //subscripe ليها 3 حالات 
    this.authService.register(this.model).subscribe(
    ()=>{console.log('تم الاشتراك بنجاح')},
    error=>{console.log(error)}
    
    )
  }
  //cancel function
  cancel() {
    //عشان يعرض الرساله دى
    console.log('ليس الأن')

    //بتبعت object
    this.cancelRegister.emit(false);
  }


}
