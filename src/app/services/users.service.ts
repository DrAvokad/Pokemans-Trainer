import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private users = []

    constructor(private readonly http: HttpClient) {

    }
     

    public fetchUsers(): void {
        this.http.get('')
    }
}