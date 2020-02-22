import { CategoryProvider } from '@app/providers/category.provider';
import { Component, OnInit } from '@angular/core';
import { Category } from '@app/models/category.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
	categoryProvider: CategoryProvider;
	category: Category;

	constructor(private router: Router, public toastr: ToastrService) { }

	ngOnInit() {
		
	}

	delete(id: string) {
		console.log(id);
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
