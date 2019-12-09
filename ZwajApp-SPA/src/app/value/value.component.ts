import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
values:any;
  //HttpClient Perform Http Request
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getValues();
  }
 //داله ال type script ليس بها كلمه function
 getValues(){
  this.http.get('http://localhost:49934/api/values').subscribe(
  response=>{this.values=response;},
  error=>{console.log(error);}
  )
  }
}
