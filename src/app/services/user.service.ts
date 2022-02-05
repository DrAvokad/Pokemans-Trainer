import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { USER_API } from '../resources';
import { Trainer } from '../models/trainer.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private _user: Trainer = { id: -1, username: 'user', pokemon: [] };

  // Getters
  get user(): Trainer {
    return this._user;
  }

  // http 'get' request for user data
  apiGetUser(username: string): void {
    this.http.get<Pokemon>(`${USER_API}?username=${username}`)
    .subscribe({
      next: (response: any) => {
        this._user = response;
      },
    });
    // Store locally
    localStorage.setItem('user', JSON.stringify(this._user))
  }

  apiSetUser(username: string): void {
  }
}
