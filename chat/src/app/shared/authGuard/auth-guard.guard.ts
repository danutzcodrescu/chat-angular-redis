import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import ApplicationState from '../../store/applicationState';
import * as fromAuth from '../../reducers/usersReducer';


@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private store: Store<fromAuth.State>, private router: Router) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.store.select(fromAuth.getUsername).map(username => {
			console.log(username);
			if (username) { 
				return true;
			} else {
				this.router.navigate(['/']);
			}

		}).take(1);
	}
}
