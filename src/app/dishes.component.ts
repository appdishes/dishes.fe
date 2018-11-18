import { Component } from '@angular/core';
import { WebService } from './web.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'dishes',
    template: `
    <div *ngFor="let dish of webService.dishes | async">
        <mat-card class="card">
            <mat-card-title [routerLink]="['/dishes', dish.id]"  style="cursor: pointer">{{dish.id}}</mat-card-title>
            <mat-card-content>{{dish.name}}</mat-card-content>
            <mat-card-content>{{dish.type}}</mat-card-content>
            <mat-card-content>{{dish.category}}</mat-card-content>
            <mat-card-content>{{dish.description}}</mat-card-content>
            <button (click)="delete(dish)" mat-raised-button color="warn">Delete</button>
            <button [routerLink]="['/manage', dish.id]"  mat-raised-button color="primary">Update</button>
            <button [routerLink]="['/manage', dish.id]"  mat-raised-button color="primary">View Details</button>
        </mat-card>
    </div>
    
    `
})
export class DishesComponent{

    constructor( private webService: WebService,
                private route: ActivatedRoute
        ){}

        ngOnInit(){
           //var id = this.route.snapshot.params.id;
           this.webService.getDishes();
        }

        delete(dish){
            this.webService.deleteDish(dish);
        }
}