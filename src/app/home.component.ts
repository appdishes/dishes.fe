import { Component} from '@angular/core';
import { DishesComponent } from './dishes.component';
import { NavComponent } from './nav.component';

@Component({
  selector: 'home',
  template: `
    <dishes></dishes>
  `,
})
export class HomeComponent  {}
