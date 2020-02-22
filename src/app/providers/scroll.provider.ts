import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ScrollProvider {
    private subject = new Subject<any>();

    constructor() { }

    scrollTo(id) {
        this.subject.next({productId: id});
	}

	getSubject() {
		return this.subject.asObservable();
	}
}
