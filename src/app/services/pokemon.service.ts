import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
import { PokemonDetails } from '../models/pokemon-details.model';
import { POKEMON_API } from '../resources';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private _pokemon: Pokemon = { id: 0, name: '', image: '', collected: false };
  private _selectedPokemon: Pokemon = { "id": 0, "name": "Errormon", "image": "500", "collected": false }
  private _pokemons: Pokemon[] = [];
  private _details: PokemonDetails | null = null
  //  {
  //   abilities: [{ ability: { name: '' } }, { ability: { name: '' } }],
  //   stats: [
  //     { base_stat: 0, stat: { name: 'hp' } },
  //     { base_stat: 0, stat: { name: 'attack' } },
  //     { base_stat: 0, stat: { name: 'defense' } },
  //   ],
  // };

  // Getters
  get details(): PokemonDetails | null {
    return this._details;
  }
  get pokemon(): Pokemon {
    return this._pokemon;
  }
  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  get selectedPokemon(): Pokemon {
    return this._selectedPokemon;
  }

  // Setter
  set selectedPokemon(pokeman: Pokemon) {
    this._selectedPokemon = pokeman;
  }

  resetDetails(){
    this._details = null
  }

  // API requests
  apiGetPokemonDetails(): void{
    this.http
      .get<PokemonDetails>(`${POKEMON_API}pokemon/${this._selectedPokemon.id}`)
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
  apiGetPokemonByName(name: string): Pokemon {
    let pokemon = { "id": 0, "name": "Errormon", "image": "500", "collected": false };
    this.http
      .get<Pokemon>(`${POKEMON_API}pokemon/${name}`)
      .pipe(catchError(this.handleError<any>('getPokemon', [])))
      .subscribe({
        next: (response: any) => {
          pokemon = response
        }
      });
    return pokemon
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