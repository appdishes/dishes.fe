import { Component } from '@angular/core';
import { WebService } from './web.service'

@Component({
    selector: 'dishes',
    template: `
    <div *ngFor="let dish of webService.dishes">
        <mat-card class="card">
            <mat-card-title>{{dish.type}}</mat-card-title>
            <mat-card-content>{{dish.description}}</mat-card-content>
        </mat-card>
    </div>
    
    `
})
export class DishesComponent{
    constructor( private webService: WebService){}

}