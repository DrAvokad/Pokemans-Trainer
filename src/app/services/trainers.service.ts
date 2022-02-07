import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Trainer } from "../models/trainer.model";

const USER_KEY = "trainer-username"
@Injectable({
    providedIn: 'root'
})
//Service for fetching trainers
export class TrainesService {

    //Setting props to private beacuse of security
    private _username: string = "";
    private _trainers: Trainer[] = [];//Using Trainer model to store fetched trainar data
    private _error: string = '';
    constructor(private readonly http: HttpClient) {
        this._username = sessionStorage.getItem(USER_KEY) || "";
        this._username = localStorage.getItem(USER_KEY) || "";
    }
     
    get username(): string {
        return this._username;
    }

    set username(username: string) {
        sessionStorage.setItem(USER_KEY, username)
        localStorage.setItem(USER_KEY, username)
        this._username = username;
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