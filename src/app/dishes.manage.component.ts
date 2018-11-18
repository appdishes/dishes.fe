import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WebService } from './web.service'
import { ActivatedRoute } from '@angular/router'
import { DishesComponent } from './dishes.component';

@Component({
  //  moduleId: module.id,
    selector: 'manage',
    templateUrl: 'dishes.manage.component.html',
    styles: [`
        .error {
            background-color: #fff0f0
        }
    `]
})
export class ManageDishComponent {
    form;
    dish = {
        name: "",
        type: "",
        description: "",
        category: "",
        id: ""
    }

    constructor(private fb: FormBuilder, 
        private webService: WebService,
        private route: ActivatedRoute) {

        this.form = fb.group({
            name: [this.dish.name, Validators.required],
            type: [this.dish.type, Validators.required],
            category: [this.dish.category, Validators.required],
            description: [this.dish.description, Validators.required]
            })
    }

    ngOnInit(){
        var id = this.route.snapshot.params.id;
        console.log("ppppp id " + id);

        this.webService.getDishesById(id);
        console.log("ppppp this.webService.singleDish.name " + this.webService.singleDish.name);
        if(this.webService.singleDish != null){
            this.dish = this.webService.singleDish;
            this.form = this.fb.group({
                name: [this.dish.name, Validators.required],
                type: [this.dish.type, Validators.required],
                category: [this.dish.category, Validators.required],
                description: [this.dish.description, Validators.required]
                }) 
        }
     }

    onSubmit() {
        this.dish.name = this.form.value.name;
        this.dish.type = this.form.value.type;
        this.dish.category = this.form.value.category;
        this.dish.description = this.form.value.description;

        this.webService.postDish(this.dish);
    }

    isValid(control) {
        return this.form.controls[control].invalid && this.form.controls[control].touched
    }
}
