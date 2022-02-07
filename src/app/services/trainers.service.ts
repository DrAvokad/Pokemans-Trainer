import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
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
        this._username = localStorage.getItem(USER_KEY) || "";
    }

    private createHeaders() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'x-api-key': "Qbhkk91GuMAKk0jjhiXpV4yaJF4dpsZOyYNSAq1MdN3VMBoCf1bwBPfiZHVLoG8M"
        })
    }

    get username(): string {
        return this._username;
    }

    set username(username: string) {
        localStorage.setItem(USER_KEY, username)
        this._username = username;
    }

    public signInUser(username: string): void {
        this.http.get<Trainer[]>('https://heroku-test-api-rasmus.herokuapp.com/trainers')
            .subscribe((trainers: Trainer[]) => {
                this._trainers = trainers;
                //Searching for username in api
                for (const trainer of this._trainers) {
                    if (username === trainer.username) {
                        console.log("Logging in");
                        localStorage.setItem(USER_KEY, username)
                    }
                    else {
                        // let username = "Aldin"
                        // this.createUser(username);
                        console.log("Regging user")
                        this.createUser(username)
                        localStorage.setItem(USER_KEY, username)
                    }
                }
            })
    }


    public createUser(username: string): void {
        const user = {username, pokemon:[]}
        const headers = this.createHeaders();
        this.http.post<Trainer>('https://heroku-test-api-rasmus.herokuapp.com/trainers', user,{
            headers          
        })
        .subscribe( data => {
            console.log(data)
        })
    }

    //This method runs several times
    public trainers(): Trainer[] {
        return this._trainers;

    }

    public error(): string {
        return this._error;
    }

}