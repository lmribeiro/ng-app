import { Component, OnInit, Input, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { LocalStorage } from 'ngx-store';
import { HeaderProvider } from '@providers/header.provider';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@ViewChild('header') header: ElementRef;
	@LocalStorage() logged: boolean = false;
	@Input() show = true;
	@Input()
	set fixed(state: boolean) {
		if(state) {
			this.renderer.addClass(this.header.nativeElement, 'fixed-top');
		}
		else {
			this.renderer.removeClass(this.header.nativeElement, 'fixed-top');
		}
	}
	collapsed: boolean = true;
	nav: any[] = [
		{name: "Categories", link: "/categories"},
		{name: "About", link: "/about"}
	]

	constructor(private headerProvider: HeaderProvider, private renderer: Renderer2) {
		this.headerProvider.getHeaderFlag().subscribe((flag)=>{
			this.show = flag;
		});
	}

	ngOnInit() {
		
	}

}
