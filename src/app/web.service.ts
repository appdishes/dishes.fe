import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class WebService{
    BASE_URL = 'https://appdishes.herokuapp.com';

    dishes = [];

    constructor(private http: Http, private sb: MatSnackBar){
        this.getDishes();
    }

    async getDishes(){
        try{
            var response = await this.http.get(this.BASE_URL + '/dishes').toPromise();
            this.dishes = response.json();
        }catch(error){
            this.handleError("Unable to get dishes");
        }

    }

    async postDish(dish){
        try{
            var response = await this.http.post(this.BASE_URL + '/dishes', dish).toPromise();
            this.dishes.push(response.json());
        }catch(error){
            this.handleError("Unable to post dish");
        }
     }


     private handleError(error){
        console.error(error);
        this.sb.open(error, 'close', {duration: 2000});
     }
}