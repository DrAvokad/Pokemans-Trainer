import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemans';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  private pokemonUrl = 'https://pokeapi.co/api/v2/';

  getPokemons(): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`)
      .pipe(catchError(this.handleError<Pokemon[]>('getHeroes', [])));
  }
  private log(message: string) {
    
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
