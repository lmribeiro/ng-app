import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	fixed: boolean = false;
	scroller: boolean = false;

	constructor(private _meta: Meta, private _title: Title, private cd: ChangeDetectorRef) {
		this._title.setTitle('NG App');

		let meta: MetaDefinition[] = [
			{ name: 'application-name', content: 'NG App' },
			{ name: 'description', content: 'A web app with Angular' }
		];

		this._meta.addTags(meta);
	}

	@HostListener("window:scroll", [])
	onWindowScroll() {
		this.scroller = false;
		this.fixed = false;
		if (window.pageYOffset > window.innerHeight) {
			this.scroller = true;
		}
		if (window.pageYOffset > 89) {
			this.fixed = true;
		}
		this.cd.detectChanges();
	}

	onActivate(event) {
		window.scroll(0, 0);
	}
}
