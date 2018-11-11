import { Component } from '@angular/core';
import { DishesComponent } from './dishes.component';
import { NewDishComponent } from './new.dish.component';
import { NavComponent } from './nav.component';

@Component({
  selector: 'home',
  template: `
  <new-dish></new-dish>
  <dishes></dishes>
  `,
  styleUrls: ['./app.component.css']
})

export class HomeComponent {

}
