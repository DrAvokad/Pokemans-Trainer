import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Trainer } from "../models/trainer.model";

//This is a reference to the user in the local state
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

    public signInUser(username: string): void {
        this.http.get<any>(`https://heroku-test-api-rasmus.herokuapp.com/trainers?username=${username}`)
            .subscribe((data) => {
                if (data.length > 0) {
                    console.log("Logged in as user: " + data[0].username);//Will change this line
                    this._username = data[0].username;
                    localStorage.setItem(USER_KEY, username)
                }
                else {
                    console.log("Creating user");
                    this.createUser(username)
                }
            })
    }

    public createUser(username: string): void {
        const user = { username, pokemon: [] }
        const headers = this.createHeaders();
        this.http.post<Trainer>('https://heroku-test-api-rasmus.herokuapp.com/trainers', user, {
            headers
        })
            .subscribe(data => {
                this._username = data.username;
                localStorage.setItem(USER_KEY, username)
                console.log("Created user: " + data.username)
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