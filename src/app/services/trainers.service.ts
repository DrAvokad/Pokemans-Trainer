import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Trainer } from "../models/trainer.model";

@Injectable({
    providedIn: 'root'
})
//Service for fetching trainers
export class TrainesService {

    //Setting props to private beacuse of security
    private _trainers: Trainer[] = [];//Using Trainer model to store fetched trainar data
    private _error: string = '';
    constructor(private readonly http: HttpClient) {
    }
     
    public fetchTrainers(): void {
        this.http.get<Trainer[]>('https://heroku-test-api-rasmus.herokuapp.com/trainers')
        .subscribe((trainers: Trainer[]) => {
            this._trainers = trainers;
        }, (error: HttpErrorResponse) => {
            this._error = error.message;
        }); 
    }


    public signInUser(): void {
        this.http.get<Trainer[]>('https://heroku-test-api-rasmus.herokuapp.com/trainers')
        .subscribe((trainers: Trainer[]) => {
            this._trainers = trainers;
            //Searching for username in api
            for (const trainer of this._trainers) {
                if("ash" === trainer.username)
                {
                    console.log("Logging in");
                }
                else
                {
                    let username = "Aldin"
                    this.createUser();
                }
            }
        })
    }


    public createUser(): void {
       
    }

    //This method runs several times
    public trainers(): Trainer[] {
        return this._trainers;
        
    }

    public error(): string {
        return this._error;
    }

}