import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoadingModule } from 'ngx-loading';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AppComponent } from './app.component';
import 'mousetrap';
import { ToastrModule } from 'ngx-toastr';
import { ImageUploaderModule } from 'ngx-image-uploader';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/* COMPONENTS */
import { LoadingComponent } from '@components/loading/loading.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { CategoriesListComponent } from '@app/components/categories-list/categories-list.component';
import { NotfoundComponent } from '@app/pages/notfound/notfound.component';

/* PAGES */
import { HomeComponent } from '@pages/home/home.component';
import { AboutComponent } from '@pages/about/about.component';
import { CategoriesComponent } from '@app/pages/categories/categories.component';
import { CategoryComponent } from '@app/pages/category/category.component';
import { AddComponent } from '@app/pages/add/add.component';
import { EditComponent } from '@app/pages/edit/edit.component';

/* PIPES */
import { StatusPipe } from '@pipes/status.pipe';

/* PROVIDERS */
import { LoadingProvider, ScrollProvider, HeaderProvider } from '@providers/providers';
import { ApiProvider } from '@providers/api.provider';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		NgbModule.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		HttpModule,
		LoadingModule,
		NgxPageScrollModule,
		ToastrModule.forRoot({
			// timeOut: 100000000,
			positionClass: 'toast-bottom-center',
		}),
		ImageUploaderModule,
		DeviceDetectorModule.forRoot(),
		NguiAutoCompleteModule,
		NgProgressModule.forRoot(),
		NgProgressHttpModule.forRoot(),
	],
	declarations: [
		AppComponent,
		AboutComponent,
		HomeComponent,
		CategoriesListComponent,	
		CategoriesComponent,
		AddComponent,
		EditComponent,
		CategoryComponent,
		LoadingComponent,
		StatusPipe,
		HeaderComponent,
		FooterComponent,
		NotfoundComponent,
	],
	providers: [ApiProvider, LoadingProvider, HeaderProvider, ScrollProvider],
	bootstrap: [AppComponent],
	entryComponents: []
})
export class AppModule { }
