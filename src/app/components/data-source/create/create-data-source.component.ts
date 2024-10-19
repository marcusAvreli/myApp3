import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { DataSourceService } from "../../../core/services/data-source.service";
import { DataSource } from "../../../core/models/data-source.model";
import {Input} from 'mgcomponents';
@Component({
    selector: 'create-data-source',
    templateUrl: './create-data-source.component.html',
    styleUrls: ['./create-data-source.component.css']
})
export class CreateDataSourceComponent implements OnInit, OnDestroy {
	constructor(private heroesService: DataSourceService){	
	/*
	if (!customElements.get(Input.is)){
			customElements.define(Input.is, Input);
		}
	*/
	
	}
	
	ngOnInit() {}
	ngOnDestroy() {}
	
	msg(){
	
		//var hero = new DataSource();

		//this.heroesService.getHeroes().subscribe(data => {console.log(data)});
		
		const element = document.getElementById("sqlFunctionName") as Input
		const inputValue = element.shadowRoot.querySelector("input").value;
		
		var hero = new DataSource();
		if(inputValue){
			hero.name=inputValue;
		}
		this.heroesService.createHero(hero).subscribe(() => {console.log("save")});
	}
}