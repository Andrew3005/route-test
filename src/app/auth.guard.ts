import { Injectable } from "@angular/core";
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { AppService } from './app.service';

@Injectable({
    providedIn: 'root'
}) export class AuthGuard implements CanActivate {

    constructor(private appService: AppService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        console.log('in guard')
        return this.appService.isInited.then(e => {
            console.log(e)
            console.log('in guard inner')
            return e;
        })
    }

}