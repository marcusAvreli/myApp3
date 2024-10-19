import { Component ,ViewChild, ComponentFactoryResolver} from '@angular/core';
import { AdDirective } from './ad.directive';
import { CreateDataSourceComponent } from './components/data-source/create/create-data-source.component';
import { EditDataSourceComponent } from './components/data-source/edit/edit-data-source.component';
import {
Animation
,Aside
,Avatar
,Button
,WizardButton
,Container
,Icon
,Input
,Item
,Label
,Img
,Badge
,Breadcrumb
,Breadcrumbs
,Card
,CardContent
,CardControls
,CardHeader
,CardSubtitle
,CardTitle
,Carousel
,CarouselItem
,Checkbox
,Chip
,Col
,ColorPicker
,CopyButton
,Divider
,Dialog
//31-05-2024
, Dropdown
,Footer
,FormatDigital
,Grid
,Header
// ,IconPicker
,Tooltip

,Toast
,List
,Main
,Menu
,MenuItem
,Popup
,Panel
,ProgressBar
,Radio
,RadioGroup
,Rate
,RelativeTime
,Row
,Select
,Slider
,SplitView

,Tab
,TabGroup
,TabPanel
,Wizard
,WizardNav
 
	} from 'mgcomponents';
	//https://github.com/blove/ngrx-tour-of-heros/blob/master/client/src/app/%2Bheroes/containers/index/index.component.ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'myApp3';
	@ViewChild(AdDirective) adHost: AdDirective;
	public currentComponent = null;
	public components = [CreateDataSourceComponent, EditDataSourceComponent];
	
	constructor(private componentFactoryResolver: ComponentFactoryResolver) { 
	if (!customElements.get(Button.is)){
			customElements.define(Button.is, Button);
		}

	}
	
	
    public renderIdentity(): void {
		const currentComponent = this.components[0];		
		this.setElement(currentComponent);
	
	
	}
	public renderCertification(): void {
		const currentComponent = this.components[1];
		this.setElement(currentComponent);
	
	}
	
	setElement(currentComponent : any){
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(currentComponent as any);
		let viewContainerRef = this.adHost.viewContainerRef;
		viewContainerRef.clear();
		let componentRef = viewContainerRef.createComponent(componentFactory);
	}
}
