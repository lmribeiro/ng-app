import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderProvider {
    private state = new BehaviorSubject<boolean>(true); // First

    constructor() {

    }

    getHeaderFlag() {
        return this.state;
    }

}
