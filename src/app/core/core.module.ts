import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { DataSourceService } from "./services/data-source.service";
//import { CharactersService } from "./services/characters.service";
import { CsrfTokenInterceptor } from "./interceptors/csrf-token.interceptor";
//import { MarvelService } from "./services/marvel.service";
//import { PowersService } from "./services/powers.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    
    DataSourceService
    
     ,{ provide: HTTP_INTERCEPTORS, useClass: CsrfTokenInterceptor, multi: true },
  
  
    
    
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

}