import { Component, OnInit } from '@angular/core';
import { HeaderProvider } from '@providers/header.provider';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(public headerProvider: HeaderProvider) {
		let headerFlagSubj = this.headerProvider.getHeaderFlag();
  		headerFlagSubj.next(true);
	}

	ngOnInit() {
	}
}
