import { SnipperService } from './../services/spinner.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class SnipperInterceptor implements HttpInterceptor{
    constructor(private snippperService: SnipperService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.snippperService.show();
        return next.handle(req).pipe(
            finalize(()=>this.snippperService.hide())
        );
    }

}