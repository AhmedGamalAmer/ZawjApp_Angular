// هنخليه Injectable
// Shortcuts @inje Tab Tab
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";


@Injectable()

//  class ErrorInterceptor Should implements all method  HttpInterceptor Interface
export class ErrorInterceptor implements HttpInterceptor
{
    //
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
    {
        return next.handle(req).pipe(
            catchError(error => {
                //HttpErrorResponse class بيخزن المعلومات العامه
                if(error instanceof HttpErrorResponse)
                {
                    //1- ApplicationError هنعمل conest يشيل ال error اللى جاى فى ال header get('Application-Error')
                    const applicationError=error.headers.get('Application-Error');
                    if(applicationError){
                    console.error(applicationError);
                    //بيرمى نص الخطأ
                    return throwError(applicationError);

                    }
                    //2- ModelState Errors نحط فيه الايرور نفسه
                    const serverError = error.error;
                    //string Error هيشيل كل الايرور اللى هتقابلنا
                    let modelStateErrors = '';
                    //serverError فيه ايرور , وعباره عن object
                    if(serverError && typeof serverError==='object'){

                        //فيه قيمه
                        for(const key in serverError){

                            if(serverError[key]){

                                //يكون string فيه الاخطاء
                                modelStateErrors+=serverError[key]+'\n';
                            }
                        }
                    }

                    //UnAuthorized Errors
                    if(error.status===401)
                    {
                        return throwError(error.statusText);

                    }
                    // Important هيجيب ال modelState Error or serverError=ApplicationError or الError ال generic 'server Error'
                    return throwError(modelStateErrors || serverError || 'server Error')

                }
            })

        )

    }
}

//عشان نستخدمه فى ال provider App.module.ts
//نعمل export
export const ErrorInterceptorProvider={
    //نوع ال provider
    provide:HTTP_INTERCEPTORS,
    //اسم ال class اللى هيشستخدمه
    useClass:ErrorInterceptor,
    //انه يستخدم ال 2 classes ال default و ال ErrorInterceptor
    multi:true
}