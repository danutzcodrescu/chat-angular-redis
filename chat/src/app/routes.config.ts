import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
	{
		path: '',
		component: AppComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{ path: '**', component: AppComponent }
];

export default appRoutes;
