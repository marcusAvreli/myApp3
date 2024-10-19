import {Component, Inject, OnDestroy, OnInit,AfterViewInit} from '@angular/core';
import { DataSourceService } from "../../../core/services/data-source.service";
import { DataSource } from "../../../core/models/data-source.model";
import {Table} from "mgcomponents";
import { HttpClient } from '@angular/common/http'; 

import { BehaviorSubject,Observable } from "rxjs";
@Component({
    selector: 'edit-data-source',
    templateUrl: './edit-data-source.component.html',
    styleUrls: ['./edit-data-source.component.css']
})
//https://github.com/raceconditionrunning/raceconditionrunning.github.io/blob/main/pages/light-rail-relay-24.html#L1143
//RelayResultsTable
export class EditDataSourceComponent implements OnInit, OnDestroy,AfterViewInit {
	public columnNames: any[];
	public tableData: any[];
	private rprts: Observable<DataSource[]>;   
	public rowDataSub = new BehaviorSubject([] as any);
	constructor(private heroesService: DataSourceService,private http: HttpClient){	}
	
	ngOnInit() {}
	
	onSuccess(data){		
		var tbl = document.getElementById("dddd") as Table;

		if(tbl){
			tbl.addEventListener("wj:table-built", (e)=>{
				tbl.setData(data);
			})
			tbl.addEventListener("wj:slider-move",(e)=>this.test(e));			
		}

	}
	
	public ngAfterViewInit(): void {
		/*
		this.heroesService.getHeroes().subscribe(
			data => this.onSuccess(data)
			,error => this.handleError(error)
			,() => this.onComplete()

		);
		*/
		 this.getJSON().subscribe(
		 data => this.onSuccess(data)
           ,error => this.handleError(error)
			,() => this.onComplete()

        );
	}
	ngOnDestroy() {
		var tbl = document.getElementById("dddd") as Table;
		console.log("on_destroy")
		if(tbl){
			console.log("on_destroy_remove")
			tbl.removeEventListener("wj:slider-move",this.test);
		}
	}
	test(e){
		console.log("edit_data_source");
		var testValue = e.detail.value;
		this.heroesService.deleteHero(testValue).subscribe(
			data => {console.log("hello")}
			,error => this.handleError(error)
			,() => this.onComplete()

		);;
		
		
		console.log("testValue:"+JSON.stringify(testValue));
	}
	
	handleError(data:any){
		console.log("error_handling","************");
		console.log("error_handling","start");
		console.log("error_handling","ok:"+data.ok);
		console.log("error_handling","message:"+data.message);
		console.log("error_handling","status:"+data.status);
		console.log("error_handling","status_text:"+data.statusText);
		console.log("error_handling","error_name:"+data.name);
		console.log("error_handling","finish");
		console.log("error_handling","************");
		
	}
	
	onComplete(){
		console.log("complete");
	}
	
	public getJSON(): Observable<any> {
		return this.http.get("./assets/advanced.json");
	}
}