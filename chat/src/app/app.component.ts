import { Component } from '@angular/core';

@Component({
	selector: 'root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'chat';
	pageShow = "login";

	page(event) {
		this.pageShow = event; 
	}
}
