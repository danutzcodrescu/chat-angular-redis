import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { UsersService } from "../../services/users.service";

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	@Output() page: EventEmitter<string> = new EventEmitter<string>();

	public form: FormGroup;

	constructor(private fb: FormBuilder, private userService: UsersService) {
		this.form = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	ngOnInit() {
	}

	login() {
		const formValue = this.form.value;
		this.userService.loginUser({username: formValue.username, password:formValue.password})
			.subscribe((resp)=> {
				console.log(resp);
				if (resp.length>0) {
					this.form.reset();
				}		
			},
			err=>console.log(err)
		)
	}

}
