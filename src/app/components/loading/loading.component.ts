import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingProvider } from '@providers/loading.provider';

@Component({
	selector: 'loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
	public loading = false;
	private subscription: Subscription;

	constructor(private loadingProvider: LoadingProvider) { }

	ngOnInit() {
        this.subscription = this.loadingProvider.getSubject().subscribe((state) => {
			this.loading = state.show;
        }, error => {
			console.log(error);
		});
    }
	ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
