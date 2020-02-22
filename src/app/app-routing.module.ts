import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@pages/home/home.component';
import { NotfoundComponent } from '@app/pages/notfound/notfound.component';
import { CategoriesComponent } from '@app/pages/categories/categories.component';
import { CategoryComponent } from '@app/pages/category/category.component';
import { AddComponent } from '@app/pages/add/add.component';
import { AboutComponent } from '@app/pages/about/about.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
	{ path: '', redirectTo: '/categories', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'categories', component: CategoriesComponent },
	{ path: 'category/:id', component: CategoryComponent },
	{ path: 'add', component: AddComponent },
	{ path: 'edit/:id', component: EditComponent },
	{ path: '404', component: NotfoundComponent },
	{ path: '**', redirectTo: '/404' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
