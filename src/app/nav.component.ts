import { Component } from '@angular/core';
import { WebService } from './web.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./dishes.component.css']
   /*
    template: `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/dishes" >View Dishes</button>
            <button mat-button routerLink="/create" >Create Dish</button>
            <input type="search"/><button mat-button (click)="searchDishes()" >Search Dishes</button>

            </mat-toolbar>
    `
    */
})
export class NavComponent {

    
    constructor(private fb: FormBuilder,
        private webService: WebService) {
    }

}