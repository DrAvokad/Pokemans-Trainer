import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private trainers = []

    constructor(private readonly http: HttpClient) {
    }
     
    public fetchTrainers(): void {
        this.http.get('https://heroku-test-api-rasmus.herokuapp.com/trainers')
        .subscribe(trainer => {
            this.trainer = trainer
        })
    }

}