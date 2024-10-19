import { NgModule,Injector,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DepInjectorService } from './dep-injector.service';
import { AppComponent } from './app.component';
import { AdDirective } from './ad.directive';
import { CreateDataSourceComponent } from './components/data-source/create/create-data-source.component';
import { EditDataSourceComponent } from './components/data-source/edit/edit-data-source.component';
//https://github.com/ncats/GSRSFrontend/tree/392c7da0e670291c40f11b21eebe2ea9cacdc96a/src/app/core
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CsrfTokenInterceptor } from './auth/csrf-token.interceptor';
//https://github.com/dispatchlabs/scanner/blob/master/src/app/app.module.ts
import { CoreModule } from "./core/core.module";
@NgModule({
  declarations: [
    AppComponent
	,CreateDataSourceComponent
	,EditDataSourceComponent
	, AdDirective
	 
  ],
  imports: [
    BrowserModule
	 ,CoreModule.forRoot()
  ],
   entryComponents: [
        CreateDataSourceComponent
		,EditDataSourceComponent
	]
 
  ,bootstrap: [AppComponent]
  ,   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {
    DepInjectorService.setInjector(injector);
  }

 }
