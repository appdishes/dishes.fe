import { Component } from '@angular/core'

@Component({
    selector: 'nav',
    template: `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/" >View Dishes</button>
            <button mat-button routerLink="/manage" >Manage Dish</button>
            </mat-toolbar>
    `
})
export class NavComponent {
    constructor() {}
}