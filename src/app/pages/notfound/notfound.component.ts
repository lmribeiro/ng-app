import { Component, OnInit } from '@angular/core';
import { HeaderProvider } from '@app/providers/providers';

@Component({
	selector: 'app-notfound',
	templateUrl: './notfound.component.html',
	styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

	constructor(public headerProvider: HeaderProvider) {
		let headerFlagSubj = this.headerProvider.getHeaderFlag();
		headerFlagSubj.next(false);
	}

	ngOnInit() {
	}

}
