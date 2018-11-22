import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WebService } from './web.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  //  moduleId: module.id,//this does not work for some reason. However it works without it.
    selector: 'manage',
    templateUrl: 'dishes.create.component.html',
    styles: [`
        .error {
            background-color: #fff0f0
        }
    `]
})
export class ManageDishComponent {
    form;
    dish;

    constructor(private fb: FormBuilder, 
        private webService: WebService,
        private route: ActivatedRoute) {
        this.resetDish();
    }

    ngOnInit(){
        /**
        var id = this.route.snapshot.params.id;
        console.log("ppppp id " + id);

        this.webService.getDishesById(id);
        console.log("ppppp this.webService.singleDish " + this.webService.singleDish);
        if(this.webService.singleDish != null){
            this.dish = this.webService.singleDish[0];
            console.log("ppppp this.webService.dish " + this.dish);

            this.form = this.fb.group({
                name: [this.dish.name, Validators.required],
                type: [this.dish.type, Validators.required],
                category: [this.dish.category, Validators.required],
                description: [this.dish.description, Validators.required]
                }) 
        }
        */
     }

    onSubmit() {
        this.dish.name = this.form.value.name;
        this.dish.type = this.form.value.type;
        this.dish.category = this.form.value.category;
        this.dish.description = this.form.value.description;

        this.webService.postDish(this.dish);
        //this.resetDish();
    }

    isValid(control) {
        return this.form.controls[control].invalid && this.form.controls[control].touched
    }

    resetDish(){
        this.dish = {
            name: "",
            type: "",
            description: "",
            category: "",
            id: ""
        }

        this.form = this.fb.group({
            name: [this.dish.name, Validators.required],
            type: [this.dish.type, Validators.required],
            category: [this.dish.category, Validators.required],
            description: [this.dish.description, Validators.required]
            })
    }

}

