import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import ApplicationState from '../../store/applicationState';
import * as fromAuth from '../../reducers/usersReducer';


@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private store: Store<ApplicationState>, private router: Router) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.store.select('user').map(user => {
			console.log(user);
			if (user.username) { 
				return true;
			} else {
				this.router.navigate(['/']);
			}

		}).take(1);
	}
}
