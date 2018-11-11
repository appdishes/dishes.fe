import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Rx'


@Injectable()
export class WebService{
   // BASE_URL = 'http://localhost:8090';
     BASE_URL = 'https://appdishes.herokuapp.com';

    private dishesStore = [];

    private dishSubjet = new Subject();

    dishes = this.dishSubjet.asObservable();

    constructor(private http: Http, private sb: MatSnackBar){
        this.getDishes(null);
    }

    getDishes(id){
        id = (id) ? '/' + id : '';

        this.http.get(this.BASE_URL + '/dishes' + id).subscribe(response =>{
            this.dishesStore = response.json();
            this.dishSubjet.next(this.dishesStore);
        }, error => {
            this.handleError("Unable to get dishes");
        });


    }

    

    async postDish(dish){
        try{
            var response = await this.http.post(this.BASE_URL + '/dishes', dish).toPromise();
            this.dishesStore.push(response.json());
            this.dishSubjet.next(this.dishesStore);
        }catch(error){
            this.handleError("Unable to post dish");
        }
     }

     deleteDish(dish){
            if (confirm("Are you sure you wish to delete Lease ' " + dish.name + " '")) {
                this.http.delete(this.BASE_URL + '/dishes', dish.id).finally(()=> {this.dishSubjet;})
                    .subscribe(
                    res => {
                        this.alert("Dish Has been Deleted");
                        //this.dishesStore.push(res.json());
                        //this.dishSubjet.next(this.dishesStore);
                    },
                    err => {
                        this.handleError("Unable to delete dish");
                    }
                    ) 
     }
    }


     private handleError(error){
        console.error(error);
        this.sb.open(error, 'close', {duration: 2000});
     }

     private alert(message){
        console.log(message);
        this.sb.open(message, 'close', {duration: 2000});
     }
}