import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    NewDishComponent
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
    FormsModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
