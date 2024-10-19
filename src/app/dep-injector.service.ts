import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//https://github.com/rpietzsch/platform/blob/master/angular/src/app/app.module.ts
export class DepInjectorService {

  constructor() { }

  protected static injector: Injector;

  protected static moduleType: any;

  public static setInjector(injector: Injector) {
    this.injector = injector;
  }

  public static getInjector(): Injector {
    return this.injector;
  }

  public static setModuleType(type: any) {
    this.moduleType = type;
  }

  public static getModuleType() {
    return this.moduleType;
  }
}