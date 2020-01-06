import { Component, OnInit } from '@angular/core';

import {JwtHelperService} from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'Zwajapp';
  jwtHelper =new JwtHelperService();
/**
 *
 */
constructor(public authService:AuthService) {}
  ngOnInit() {
    const token=localStorage.getItem('token');
    //القيمه هتكون على مستوى المشروع ككل
    this.authService.decodedToken=this.jwtHelper.decodeToken(token);
  }

}

// هنعرف ال decodedToken بحيث يكون على مستوى المشروع ككل
