import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { DataSource } from "../models/data-source.model";
import { BaseService } from "./base.service";


@Injectable()
export class DataSourceService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  createHero(hero: DataSource): Observable<DataSource> {
    return this.httpClient.post<DataSource>(`${this.BASE_URL}/dataSource/insert`, hero);
  }

  deleteHero(hero: DataSource): Observable<void> {
    return this.httpClient.delete<void>(`${this.BASE_URL}/dataSource/${hero.name}`);
  }

  getHero(id: string): Observable<DataSource> {
    return this.httpClient.get<DataSource>(`${this.BASE_URL}/heroes/${id}`);
  }

  getHeroes(): Observable<Array<DataSource>> {
    return this.httpClient.get<Array<DataSource>>(`${this.BASE_URL}/dataSource/getAll`);
  }

  updateHero(hero: DataSource): Observable<DataSource> {
    return this.httpClient.put<DataSource>(`${this.BASE_URL}/heroes/${hero.id}`, hero);
  }
}