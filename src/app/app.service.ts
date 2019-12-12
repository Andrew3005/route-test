import { Injectable } from "@angular/core";
import { timer, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
}) export class AppService {

    data: any;

    isInited: Promise<any>;

    private _resolve: (result?: any) => void;
    private _reject: (reason?: any) => void;

    constructor() {
        this.isInited = new Promise<Boolean>((res, rej) => {
            this._resolve = res;
            this._reject = rej;
        })
        // this.isInited.then(null, () => { });
    }

    init() {
        const source = timer(4000)
        console.log('in init')
        source.subscribe((res) => {
            this.afterInit(res)
        })
    }

    afterInit(data) {

        console.log('in after init')
        this.data = data; // save data

        this._resolve(Boolean(this.data.length));
    }

}