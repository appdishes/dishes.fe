import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DishesComponent } from './dishes.component';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { ManageDishComponent } from './dishes.manage.component';


var routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dishes',
    component: DishesComponent
  },
  {
    path: 'dishes/:id',
    component: DishesComponent
  },
  {
    path: 'manage',
    component: ManageDishComponent
  },
  {
    path: 'manage/:id',
    component: ManageDishComponent
  }];



@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes), BrowserAnimationsModule, MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule],
  declarations: [AppComponent, DishesComponent, ManageDishComponent, NavComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [WebService]
})
export class AppModule { }