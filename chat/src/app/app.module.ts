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
import appRoutes from './routes.config';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		DashboardComponent
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
		RouterModule.forRoot(appRoutes, {enableTracing: process.env["NODE_ENV"] === "production" ? true : false})
	],
	providers: [UsersService],
	bootstrap: [AppComponent]
})
export class AppModule { }
