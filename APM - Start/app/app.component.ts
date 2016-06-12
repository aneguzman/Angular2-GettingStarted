import { Component } from 'angular2/core'


@Component({
	selector: 'pm-app',
	template: '<div>Hello World</div>'
})
export class AppComponent {
	pageTitle: string = "Acme Product Managment";
}