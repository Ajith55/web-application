import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable()

 export class AuthHeaderInterceptor implements HttpInterceptor{
    token = sessionStorage.getItem('token');


    intercept(request : HttpRequest<any>, next : HttpHandler){

        console.log('Request is on the way');
        console.log(this.token);
        let headers = request.headers.append('Authorization', this.token);
        let req = request.clone({headers});
        return next.handle(req);

    }

 }