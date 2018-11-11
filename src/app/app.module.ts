import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule, 
  MatCardModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatInputModule
 } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes.component';
import { NewDishComponent } from './new.dish.component';

import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';


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
  path: 'register',
  component: RegisterComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    NewDishComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})

export class AppModule { }
