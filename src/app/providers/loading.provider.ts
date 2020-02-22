import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoadingProvider {
    private subject = new Subject<any>();

    constructor() { }

    show() {
        this.subject.next({show: true});
    }

    hide() {
        setTimeout(() => {
            this.subject.next({show: false});
        }, 500);
    }

    getSubject() {
        return this.subject.asObservable();
    }
}
