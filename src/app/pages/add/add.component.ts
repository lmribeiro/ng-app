import { Component, OnInit } from '@angular/core';
import { CategoryProvider } from '@providers/category.provider';
import { Category } from '@app/models/category.model';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss'],
	providers: [CategoryProvider]
})
export class AddComponent implements OnInit {
	model: Category;
	breadcrumbs: any;
	statusOpt = [];

	constructor(public categoryProvider: CategoryProvider, public toastr: ToastrService) { }

	ngOnInit() {
		this.model = new Category;
		this.statusOpt = [
			{"key" : "1", "value": "Active"},
			{"key" : "0", "value": "Inactive"}
		]
	}

	submit() {
		this.categoryProvider.add(this.model).subscribe((data: any) => {
			this.model = new Category;
			if(data.status = "success") {
				this.toastr.success(data.message);
			} else {
				this.toastr.error(data.message);
			}
		})
	}
}
