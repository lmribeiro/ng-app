import { Component, OnInit } from '@angular/core';
import { CategoryProvider } from '@providers/category.provider';
import { Category } from '@app/models/category.model';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',	
	styleUrls: ['./edit.component.scss'],
	providers: [CategoryProvider]
})
export class EditComponent implements OnInit {
	model: Category;
	breadcrumbs: any;
	statusOpt = [];

	constructor(private route: ActivatedRoute, private router: Router, public categoryProvider: CategoryProvider, public toastr: ToastrService) { }

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');
		this.load(id)

		this.statusOpt = [
			{"key" : "1", "value": "Active" },
			{"key" : "0", "value": "Inactive" }
		]
	}

	load(id: string) {
		this.categoryProvider.one(id).subscribe((data: any) => {
			this.model = data.data;
		})
	}

	submit() {
		this.categoryProvider.edit(this.model).subscribe((data: any) => {
			if(data.status = "success") {
				this.toastr.success(data.message);
			} else {
				this.toastr.error(data.message);
			}
		})
	}
}
