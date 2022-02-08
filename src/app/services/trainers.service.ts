import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, of } from "rxjs";
import { Pokemon } from "../models/pokemon.model";
import { Trainer } from "../models/trainer.model";

//This is a reference to the user in the local state
export const USER_KEY = "trainer-username"
@Injectable({
    providedIn: 'root'
})
//Service for fetching trainers
export class TrainesService {

    //Setting props to private beacuse of security
    private _trainer: Trainer | null = null
    private _username: string = "";
    private _trainers: Trainer[] = [];//Using Trainer model to store fetched trainar data
    private _error: string = '';
    constructor(private readonly http: HttpClient, private router: Router) {
        if(localStorage.getItem(USER_KEY) !== null){
            const stringObj = localStorage.getItem(USER_KEY);
            this._trainer = JSON.parse(stringObj || "")
            this._username = JSON.parse(stringObj || "").username
        }else{
            this._trainer = null
            this._username = ""
        }
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

    get trainer(): Trainer | null {
        return this._trainer;
    }

    apiAddPokemonToTrainer(pokemon:Pokemon): void {
        const headers = this.createHeaders();
        let object = {
            name: pokemon.name,
            id: pokemon.id
        }
        this.trainer?.pokemon.push(object);
        console.log(object)
        this.http
        .patch(`https://heroku-test-api-rasmus.herokuapp.com/trainers/${this.trainer?.id}`, this._trainer, {headers})
        .pipe(catchError(this.handleError<any>('addPokemon', [])))
        .subscribe(data =>{
            console.log(data)
            localStorage.setItem(USER_KEY, JSON.stringify(data))
        })
    }

    public signInUser(username: string): void {
        this.http.get<any>(`https://heroku-test-api-rasmus.herokuapp.com/trainers?username=${username}`)
            .subscribe((data) => {
                if (data.length > 0) {
                    console.log("Logged in as user: " + data[0].username);//Will change this line
                    this._username = data[0].username;
                    //Store users object in local storage
                    localStorage.setItem(USER_KEY, JSON.stringify(data[0]));
                    this._trainer = data[0]
                    this.router.navigateByUrl("/catalogue");
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
                console.log("Created user: " + data.username)
                //Store users object in local storage
                localStorage.setItem(USER_KEY, JSON.stringify(data))
                this._trainer = data
                this.router.navigateByUrl("/catalogue");
            })
    }

    //This method runs several times
    public trainers(): Trainer[] {
        return this._trainers;

    }

    public error(): string {
        return this._error;
    }

    // Log errors to message service
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            // this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }

}