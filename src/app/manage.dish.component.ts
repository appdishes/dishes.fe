import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'manage-dish',
    template: `
    <mat-card class="card">
        <mat-card-content>
            <mat-form-field>
                <input [(ngModel)]="name" matInput placeholder="Name">
            </mat-form-field>
            <mat-form-field>
                <input [(ngModel)]="type" matInput placeholder="Type">
            </mat-form-field>
            <mat-form-field>
                <input [(ngModel)]="category" matInput placeholder="Category">
            </mat-form-field>
            <mat-form-field>
                <textarea [(ngModel)]="description" matInput placeholder="Description"></textarea>
            </mat-form-field>
            <mat-card-actions>
            <button (click)="post()" mat-button color="primary">Create New</button>
            </mat-card-actions>
        </mat-card-content>
    </mat-card>

    `
})
export class ManageDishesComponent{

   // constructor(private webService: WebService){}
    form;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            name: ['', Validators.required],
            type: ['', Validators.required],
            category: ['', Validators.required],
            description: ['', Validators.required]
        })
    }

    dish = {
        name: "",
        type: "",
        description: "",
        category: "",
        id: ""
    }
   

   // put(){
    //    this.webService.putDish(this.dish);
   // }

    delete(dish){
       // this.webService.deleteDish(this.dish);
    }
}