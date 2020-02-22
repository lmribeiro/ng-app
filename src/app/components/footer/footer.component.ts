import { Component, OnInit, Input } from '@angular/core';
import { HeaderProvider } from '@providers/providers';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	@Input() show = true;

	constructor(private headerProvider: HeaderProvider) {
		this.headerProvider.getHeaderFlag().subscribe((flag)=>{
			this.show = flag;
		});
	}

	ngOnInit() {
	}

}
