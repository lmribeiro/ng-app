import { Component, OnInit, Inject } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CategoryProvider } from '@providers/category.provider';
import { Category } from '@app/models/category.model';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss'],
	providers: [CategoryProvider]
})
export class CategoryComponent implements OnInit {
	category: Category;
	breadcrumbs: any;

	constructor(private route: ActivatedRoute, private router: Router, public categoryProvider: CategoryProvider, public toastr: ToastrService) {

	 }

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');
		this.load(id)
	}

	load(id: string) {
		this.categoryProvider.one(id).subscribe((data: any) => {
			this.category = data.data;
		})
	}

	delete(id: string) {
		this.categoryProvider.delete(id).subscribe((data: any) => {
			this.category = new Category;
			if(data.status = "success") {
				this.toastr.success(data.message);
				this.router.navigate(['/categories'])
			} else {
				this.toastr.error(data.message);
			}
		})
	}
}
