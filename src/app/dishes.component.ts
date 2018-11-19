import { Component } from '@angular/core';
import { WebService } from './web.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'dishes',
    template: `
    <button (click)="showAll()" mat-raised-button color="primary">Show All</button>

    <div *ngFor="let dish of webService.dishes | async">
        <mat-card class="card">
            <mat-card-title (click)="selectById(dish.id)" style="cursor: pointer">{{dish.id}}</mat-card-title>
            <mat-card-content (click)="selectByName(dish.name)" style="cursor: pointer">{{dish.name}}</mat-card-content>
            <mat-card-content (click)="selectByType(dish.type)" style="cursor: pointer">{{dish.type}}</mat-card-content>
            <mat-card-content (click)="selectByCategory(dish.category)" style="cursor: pointer">{{dish.category}}</mat-card-content>
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
           this.webService.getDishes();
        }

        showAll(){
            this.webService.getDishes();
         }

        delete(dish){
            this.webService.deleteDish(dish);
        }

        selectById(id){
            this.webService.getDishesById(id);
        }

        selectByName(name){
            this.webService.getDishesByName(name);
        }

        selectByType(type){
            this.webService.getDishesByType(type);
        }

        selectByCategory(category){
            this.webService.getDishesByCategory(category);
        }
}