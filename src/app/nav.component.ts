import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    template: `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/">Dishes board</button>
            <button mat-button routerLink="/dishes">Dishes</button>
            <button mat-button routerLink="/dishes">Dishes</button>
            <button md-button routerLink="/register">Register</button>  
        </mat-toolbar>
    
    `
})
export class NavComponent{
    constructor( ){}

}