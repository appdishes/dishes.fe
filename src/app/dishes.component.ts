import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'dishes',
    templateUrl: './dishes.component.html',
    styles: [`
        .error {
            background-color: #fff0f0
        }
    `]
})

export class DishesComponent{
    searchForm;

    constructor(    private fb: FormBuilder, 
                    private webService: WebService,
                    private route: ActivatedRoute
        ){
            this.resetSearchForm();
        }

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

        resetSearchForm(){
            this.searchForm = this.fb.group({
                search: ['', Validators.required]
                })
        }
    
        onSubmit(){
            this.webService.search(this.searchForm.value.search);
        }
}