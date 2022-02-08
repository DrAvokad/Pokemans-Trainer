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

  private POKEMON_SESSION_KEY: string = "offset:"
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
  // Http get request for pokemon details
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
  // Http get request to fetch specific pokemon by id
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
  // Http get request to fetch specific pokemon by name
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
  // Push pokemons to pokemons getter from session storage
  apiUpdateSession(index: number) {
    console.log(this.POKEMON_SESSION_KEY+index)
    let pokemans = JSON.parse(sessionStorage.getItem(this.POKEMON_SESSION_KEY+index) || "this should not be null")
    for(let i = 0; i < pokemans.length; i++){
      this._pokemons.push(pokemans[i])
    } 
  }
  // Get pokemons from session storage if they exist, else fetch from API
  apiGetPokemons(offset: number, limit: number): void {
    if(sessionStorage.getItem(this.POKEMON_SESSION_KEY+offset) !== null){
     this._pokemons = []
     this.apiUpdateSession(offset)
     
    }else{
    this._pokemons = []
    this.http.get<Pokemon[]>(`${POKEMON_API}pokemon?offset=${offset}&limit=${limit}`)
      .pipe(catchError(this.handleError<any>('getPokemons', [])))
      .subscribe({
        next: (response) => {
          // Set image for every pokemon
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
          sessionStorage.setItem(this.POKEMON_SESSION_KEY+offset, JSON.stringify(this._pokemons))
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
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