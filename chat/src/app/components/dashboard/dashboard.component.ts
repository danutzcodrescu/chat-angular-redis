import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import ApplicationState from '../../store/applicationState';

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor(private store: Store<ApplicationState>) { }

	ngOnInit() {
		// this.store.select()
	}

}
