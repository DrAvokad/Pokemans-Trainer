import { Injectable } from '@angular/core';
import { Pokemon } from './models/pokemon.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { PokemonDetails } from './models/pokemon-details.model';
import { POKEMON_API } from './resources';
import { PokemonList } from './models/pokemonList.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  public pokemons: Pokemon[] | null = null;

  // Return pokemon details response based on the PokemonDetail model
  getPokemonDetails(id: number): Observable<PokemonDetails> {
    const response = this.http
      .get<PokemonDetails>(`${POKEMON_API}pokemon/${id}`)
      .pipe(catchError(this.handleError<any>('getPokemonDetails ', [])));
    return response;
  }

  // Return pokemon response based on id
  getPokemon(id: number): Observable<Pokemon> {
    const response = this.http
      .get<Pokemon>(`${POKEMON_API}pokemon/${id}`)
      .pipe(catchError(this.handleError<any>('getPokemon', [])));
    return response;
  }

  // Return response of pokemons with offset (pokemon id to start from) 
  // and limit (number of pokemons to fetch)
  getPokemons(offset: number, limit: number) {
    const response = this.http
      .get<PokemonList>(`${POKEMON_API}pokemon?offset=${offset}&limit=${limit}`)
      // .subscribe({
      //   next: (response) => {
           return response
      //     this.pokemons = []
      //     for (let i = 0; i < limit; i++) {
      //       const pokemon = this.http
      //         .get<Pokemon>(`${POKEMON_API}pokemon/${response.results[i].name}`)
      //         .subscribe({
      //           next: (pokemon) => {
      //             this.pokemons?.push(pokemon);
      //           },
      //           error: (error) => {
      //             console.log(error);
      //           }
      //         });
      //     }
      //   },
      //   error: (error) => {
      //     console.log(error);
      //   },
      // });

    // .pipe(catchError(this.handleError<any>('getPokemons', [])));
  }

  // getListOfPokemons(offset: number, limit: number) {
  //   this.getPokemons(offset, limit)
  //   return this.pokemons
  // }

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
