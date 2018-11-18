import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx'
import { MatSnackBar } from '@angular/material';

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:8090';
  // BASE_URL = 'https://appdishes.herokuapp.com';
    private dishesStore = [];

    singleDish;
    private dishSubjet = new Subject();

    dishes = this.dishSubjet.asObservable();

    constructor(private http: Http, private sb: MatSnackBar) {
        this.getDishes();
    }


     getDishes(){

        this.http.get(this.BASE_URL + '/dishes').subscribe(response =>{
                this.dishesStore = response.json();
                this.dishSubjet.next(this.dishesStore);
        }, error => {
            this.handleError("Unable to get dishes");
        });
    }

    getDishesById(id){
        this.http.get(this.BASE_URL + '/dishes'+'/' + id).subscribe(response =>{
               // this.dishesStore = response.json();
              //  this.dishSubjet.next(this.dishesStore);
              //  if(id != null){
                    this.singleDish = response.json()[0];
                    console.log("4445 id " + id);

                    console.log("4445 response.json()[0] " + response.json()[0].name);
                    console.log("4445 this.singleDish.name " + this.singleDish.name);
               // }
        }, error => {
            this.handleError("Unable to get dishes");
        });
    }


    async postDish(dish){
        try{
            var response = await this.http.post(this.BASE_URL + '/dishes', dish).toPromise();
            this.informCreated("dish " + response.json().name +" was created!");
        }catch(error){
            this.handleError("Unable to post dish");
        }
     }

    deleteDish(dish){
        if (confirm("Are you sure you wish to delete Lease ' " + dish.name + " '")) {
            this.http.delete(this.BASE_URL + '/dishes'+"/"+ dish.id).finally(()=> {this.dishSubjet;})
                .subscribe(
                res => {
                    this.alert("Dish Has been Deleted");
                },
                err => {
                    this.handleError("Unable to delete dish");
                } ) 
 }
}

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }

     private alert(message){
        console.log(message);
        this.sb.open(message, 'close', {duration: 2000});
     }

     private informCreated(message){
        this.sb.open(message, 'close', {duration: 2000});
     }
}