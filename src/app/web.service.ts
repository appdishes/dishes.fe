import { Http  } from '@angular/http';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx'
import { MatSnackBar } from '@angular/material';

@Injectable()
export class WebService {
    //BASE_URL = 'http://localhost:8090';
   BASE_URL = 'https://appdishes.herokuapp.com';
    private dishesStore = [];
    private dishSubjet = new Subject();
    dishes = this.dishSubjet.asObservable();

    private singleDishStore = new Dish();
    private singleDishSubjet = new Subject();
    singleDish = this.singleDishSubjet.asObservable();


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
        if(id != null || id != ''){
            this.http.get(this.BASE_URL + '/dishes'+'/' + id).subscribe(response =>{
                this.dishesStore = response.json();
                this.dishSubjet.next(this.dishesStore);
            }, error => {
                this.handleError("Unable to get dishes");
            });
        }
    }

    getDishesByName(name){
        if(name != null || name != ''){
            let data = {"name": name};
            this.http.get(this.BASE_URL + '/dishes/by', {params: data}).subscribe(response =>{
                //console.log("oooo" + response.json())
                this.dishesStore = response.json();
                this.dishSubjet.next(this.dishesStore);
            }, error => {
                this.handleError("Unable to get dishes");
            });
        }
    }

    getDishesByCategory(category){
        if(category != null || category != ''){
            let data = {"category": category};
            this.http.get(this.BASE_URL + '/dishes/by', {params: data}).subscribe(response =>{
               // console.log("oooo" + response.json())
                this.dishesStore = response.json();
                this.dishSubjet.next(this.dishesStore);
            }, error => {
                this.handleError("Unable to get dishes");
            });
        }
    }

    getDishesByType(type){
        if(type != null || type != ''){
            let data = {"type": type};
            this.http.get(this.BASE_URL + '/dishes/by', {params: data}).subscribe(response =>{
               // console.log("oooo" + response.json())
                this.dishesStore = response.json();
                this.dishSubjet.next(this.dishesStore);
            }, error => {
                this.handleError("Unable to get dishes");
            });
        }
    }

    search(search){
        if(typeof search === 'undefined' || search == null || search === null || search == ''){
           // console.log("hhhhhh " + search)
            alert("Please provide value in search box.")

        }else{
           // console.log("oooo" + search)

            let data = {"search": search};
            this.http.get(this.BASE_URL + '/dishes/search', {params: data}).subscribe(response =>{
                console.log("oooo" + response.json())
               if(response.json().length === 0){
                    alert("Search did not return any results.")
               }else{
                this.dishesStore = response.json();
                this.dishSubjet.next(this.dishesStore);
               }
            }, error => {
                this.handleError("Unable to get dishes");
            });
        }
    }

    postDish(dish){
        this.http.post(this.BASE_URL + '/dishes', dish).subscribe(response =>{
        this.informCreated("dish " + response.json().name +" was created!");
       }, error  => {
            this.handleError("Unable to post dish");
        });
     }

    deleteDish(dish){
        if (confirm("Are you sure you wish to delete Lease ' " + dish.name + " '")) {
            this.http.delete(this.BASE_URL + '/dishes'+"/"+ dish.id).finally(()=> {this.dishSubjet;})
                .subscribe(
                res => {
                    this.alertUser("Dish Has been Deleted");
                },
                err => {
                    this.handleError("Unable to delete dish");
                } ) 
 }
}

    private handleError(error) {
        //console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }

    private emptyValue(error) {
       // console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }

     private alertUser(message){
       // console.log(message);
        this.sb.open(message, 'close', {duration: 2000});
     }

     private informCreated(message){
        this.sb.open(message, 'close', {duration: 2000});
     }
}

export class Dish{
    name: string;
    type: string;
    description: string;
    category: string;
}