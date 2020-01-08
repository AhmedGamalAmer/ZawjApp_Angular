import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { MemberListComponent } from './member-list/member-list.component'
import { ListsComponent } from './lists/lists.component'
import { MessagesComponent } from './messages/messages.component'
import { AuthGuard } from './_guards/auth.guard'

// Routes Array of Object Pass & Value
export const appRoutes:Routes=[
    //لازم نراعى الترتيب 
    {path:'',component:HomeComponent},

    {path:'',
        //runGuardsAndResolvers='always' Dummey Route او مسار وهمى
        //ولازم يكون جواه مسارات فرعيه children
        runGuardsAndResolvers:'always',
        //ونعين الحارث
        canActivate:[AuthGuard],
        //هضيف السارات اللى عايز احميها
        children:[
        {path:'members',component:MemberListComponent,canActivate:[AuthGuard]},
        {path:'lists',component:ListsComponent},
        {path:'messages',component:MessagesComponent}
    ]
    },

    // {path:'home',component:HomeComponent},
    
    //لحمايه صفحه ال members -canActivate:[AuthGuard]
    //لوعايز اكثر من Guard -canActivate:[AuthGuard,MoneyGuard]
    {path:'members',component:MemberListComponent},
    {path:'lists',component:ListsComponent},
    {path:'messages',component:MessagesComponent},
    //كتب اى حاجه تانى يدخل على ال home
    //ممكن ندخله على صفحه 404 بس الافضل ال home عشان نزود عدد المشتركين
    // {path:'**',redirectTo:'home',pathMatch:'full'}
    {path:'**',redirectTo:'',pathMatch:'full'}
];