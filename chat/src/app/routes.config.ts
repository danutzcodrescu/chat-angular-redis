import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './shared/authGuard/auth-guard.guard';

export const appRoutes: Routes = [
	{
		path: '',
		component: AuthComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [AuthGuard]
	},
	{ path: '**', component: AuthComponent }
];
