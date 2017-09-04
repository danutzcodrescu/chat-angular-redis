import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { UsersService } from "../../services/users.service";

@Component({
	selector: 'register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

	register() {
		const data = {username: this.form.value.username, password: this.form.value.password};
		this.userService.createUser(data).subscribe((result)=>{
			console.log(result);
			this.form.reset();
		}, 
		err => console.log(err))
	}

}
