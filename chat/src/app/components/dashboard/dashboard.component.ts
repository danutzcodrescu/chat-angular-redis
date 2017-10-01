import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import ApplicationState from '../../store/applicationState';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	public form: FormGroup;

	constructor(private fb: FormBuilder, private userService: UsersService) {
		this.form = this.fb.group({
			message: ['', Validators.required]
		});
	}

	ngOnInit() {
	}

	newContact() {
		console.log('test');
	}

	sendMessage() {
		const formValue = this.form.value;
		console.log(formValue);
	}

}
