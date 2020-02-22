import { Component, OnInit, Input } from '@angular/core';
import { CategoryProvider } from '@providers/category.provider';
import { Category } from '@app/models/category.model';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'categories-list',
	templateUrl: './categories-list.component.html',
	styleUrls: ['./categories-list.component.scss'],
	providers: [CategoryProvider]
})
export class CategoriesListComponent implements OnInit {
	categories: Category[];
	@Input() number: number = 18;
	category: Category;

	constructor(public categoryProvider: CategoryProvider, public toastr: ToastrService) { }

	ngOnInit() {
		this.load();
	}

	load() {
		this.categoryProvider.all().subscribe((data: any) => {
			this.categories = data.data;
		}, error => {
			console.log(error);
		})
	}

	delete(id: string) {
		console.log(id);
		this.categoryProvider.delete(id).subscribe((data: any) => {

			if(data.status = "success") {
				this.toastr.success(data.message);
				this.load();
			} else {
				this.toastr.error(data.message);
			}
		})
	}
}
