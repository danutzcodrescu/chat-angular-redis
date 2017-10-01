import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersService } from "./services/users.service";

import { StoreModule } from '@ngrx/store';
import rootReducer from './reducers/rootReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes.config';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './shared/authGuard/auth-guard.guard';
import 'rxjs/Rx';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		DashboardComponent,
		AuthComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		StoreModule.forRoot(rootReducer),
		StoreDevtoolsModule.instrument({
			maxAge: 25 //  Retains last 25 states
		}),
		RouterModule.forRoot(appRoutes)
	],
	providers: [UsersService, AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
