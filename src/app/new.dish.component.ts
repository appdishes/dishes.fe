import { Component} from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'new-dish',
    template: `
    <mat-card class="card">
        <mat-card-content>
            <mat-form-field>
                <input [(ngModel)]="dish.name" matInput placeholder="Name">
            </mat-form-field>
            <mat-form-field>
                <input [(ngModel)]="dish.type" matInput placeholder="Type">
            </mat-form-field>
            <mat-form-field>
                <input [(ngModel)]="dish.category" matInput placeholder="Category">
            </mat-form-field>
            <mat-form-field>
                <textarea [(ngModel)]="dish.description" matInput placeholder="Description"></textarea>
            </mat-form-field>
            <mat-card-actions>
            <button (click)="post()" mat-button color="primary">Create New</button>
            </mat-card-actions>
        </mat-card-content>
    </mat-card>

    `
})
export class NewDishComponent{

    constructor( private webService: WebService){}
    dish = {
        name: "",
        type: "",
        description: "",
        category: "",
        id: ""
    }
   

    post(){
        this.webService.postDish(this.dish);
    }

}