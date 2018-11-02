import { Component } from '@angular/core';
import { DishesComponent } from './dishes.component';
import { NewDishComponent } from './new.dish.component';

@Component({
  selector: 'app-root',
  template: `
  <h1>Dishes</h1>
  <new-dish></new-dish>
  <dishes></dishes>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
