import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Trainer } from "../models/trainer.model";

@Injectable({
    providedIn: 'root'
})
//Service for fetching trainers
export class TrainesService {

    private trainers: Trainer[] = [];//Using Trainer model to store fetched trainar data
    private error: string = '';
    constructor(private readonly http: HttpClient) {
    }
     
    public fetchTrainers(): void {
        this.http.get<Trainer[]>('https://heroku-test-api-rasmus.herokuapp.com/trainers')
        .subscribe((trainers: Trainer[]) => {
            this.trainers = trainers;
        }, (error: HttpErrorResponse) => {
            this.error = error.message;
        }); 
    }

}