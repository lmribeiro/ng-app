import { Component, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	@ViewChild('myCarousel') myCarousel: NguCarousel<any>;
	public carouselTile: NguCarouselConfig = {
		grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
		slide: 1,
		speed: 400,
		point: {
			visible: true
		},
		touch: true,
		loop: true,
		interval: { timing: 1500 },
		animation: 'lazy'
	};
	public carouselTileItems = [
		{text: "Responsabilidade respeitando princípios de desenvolvimento económico e social."},
		{text: "Criação de valor melhorando continuamente o desempenho"},
		{text: "Orientação para o Mercado promovendo a satisfação e fidelização do Cliente"}
	];

	constructor() { }

	ngOnInit() {
		
	}

}
