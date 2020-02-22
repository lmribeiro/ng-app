import { Injectable } from '@angular/core';
import { ApiProvider } from '@app/providers/api.provider';
import { Category } from '@app/models/category.model';

@Injectable()
export class CategoryProvider {

	constructor(private api: ApiProvider) { }

	all() {
		return this.api.get("/all");
	}

	one(id: string) {
		return this.api.get("/one/" + id);
	}

	add(data: Category) {
		return this.api.post("/add", {data: data});;
	}

	edit(data: Category) {
		return this.api.put("/edit/" + data.id, {data: data});
	}

	delete(id: string) {
		return this.api.delete("/delete/" + id);
	}

}
