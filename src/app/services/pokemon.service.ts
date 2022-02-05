import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { PokemonDetails } from '../models/pokemon-details.model';
import { POKEMON_API } from '../resources';
import { PokemonList } from '../models/pokemonList.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private _pokemon: Pokemon = { id: 0, name: '', image: '', collected: false };
  private _pokemons: Pokemon[] = [];
  private _details: PokemonDetails = {
    abilities: [{ ability: { name: '' } }, { ability: { name: '' } }],
    stats: [
      { base_stat: 0, stat: { name: 'hp' } },
      { base_stat: 0, stat: { name: 'attack' } },
      { base_stat: 0, stat: { name: 'defense' } },
    ],
  };

  // Getters
  get details(): PokemonDetails {
    return this._details;
  }
  get pokemon(): Pokemon {
    return this._pokemon;
  }
  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  // API requests
  apiGetPokemonDetails(id: number): void {
    this.http
      .get<PokemonDetails>(`${POKEMON_API}pokemon/${id}`)
      .pipe(catchError(this.handleError<any>('getPokemonDetails ', [])))
      .subscribe({  
        next: (response: any) => {
          this._details = response
        }
      });
  }
  apiGetPokemon(id: number): void {
    this.http
      .get<Pokemon>(`${POKEMON_API}pokemon/${id}`)
      .pipe(catchError(this.handleError<any>('getPokemon', [])))
      .subscribe({  
        next: (response: any) => {
          this._pokemon = response
        }
      });
  }
  apiGetPokemons(offset: number, limit: number): void {
    this._pokemons = []
    this.http.get<Pokemon[]>(`${POKEMON_API}pokemon?offset=${offset}&limit=${limit}`)
    .pipe(catchError(this.handleError<any>('getPokemons', [])))
    .subscribe({
      next: (response) => {
        for (let i = 0; i < limit; i++) {
          let _id = offset + i + 1;
          let _imageurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${_id}.png`;
          let pokemon = {
            id: _id,
            name: response.results[i].name,
            image: _imageurl,
            collected: false
          }
          this.pokemons?.push(pokemon)
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // Log to message service
  private log(message: string) {
    this.messageService.message = `PokemonService: ${message}`;
  }

  // Log errors to message service
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}