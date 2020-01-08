import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//طالما فيه export يبقى اقدر اعمله import فى اى مكان تانى
//لو طبقنا class CanActivate يبقى قادر على الحمايه
// CanActivate بنفذ داله  canActivate يفعل الpath ولا لا
export class AuthGuard implements CanActivate {
      //هنعمل constructor عشان نعمل inject للالصلاحيه الدخول ال Authentication و للتوجه لصفحه تانيه ال router وعرض رساله يجب عليك التسجيل ال alertify
      constructor(private authservice:AuthService,private router:Router,private alertify:AlertifyService) {
      

      }
  
  canActivate(
    // next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
    //:mean return  -  canActivate return boolean (Observable | Promise)
   ):
    //  Observable<boolean> | Promise<boolean> | 
    //boolean امتى يفتح المسار وامتى لا
    //لو Logged in يبقى معاه الصلاحيه للدخول على ال path
    // لو لا يبقى ليس معه صلاحيه للدخول على ال path ونوجهه الى صفحه ال home عشان يعمل login ونقوله رساله لازم تسجيل الدخول
    boolean {
      //لو عمل loggedIn يدخل على ال path
      if(this.authservice.LoggedIn()){
        return true;
      }
      //لم يدخل على ال loggedIn يظهر رساله خطئ ويذهب الى ال home
      this.alertify.error('يجب عليك تسجيل الدخول اولا');
      // this.router.navigate(['/home']);
       this.router.navigate(['']);
      return false;
    }
}
