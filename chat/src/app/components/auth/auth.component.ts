import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

	title = 'chat';
	pageShow = "login";

	constructor() { }

	ngOnInit() {
	}

	page(event) {
		this.pageShow = event; 
	}

}
