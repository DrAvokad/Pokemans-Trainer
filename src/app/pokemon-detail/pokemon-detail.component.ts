import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { PokemonDetails } from '../models/pokemon-details.model';
import { POKEMON_IMG_API, POKEMON_API } from '../resources';
import { PokemonList } from '../models/pokemonList.model';
import { ThisReceiver } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  constructor(private pokemonService: PokemonService,
    private http: HttpClient) {}

  public pokemonDetails: PokemonDetails | null = null;
  public pokemon: Pokemon | null = null;
  public pokemons: Pokemon[] | null = null;

  ngOnInit(): void {
    this.getPokemon(1)
  } 

  handleLoadDetails(id: number) {
    this.getPokemonDetails(id);
    this.getPokemons(20, 20)
  }
  getPokemons(offset: number, limit: number) {
    this.pokemonService.getPokemons(offset, limit)
       .subscribe({
        next: (response) => {
          this.pokemons = []
          for (let i = 0; i < limit; i++) {
            const pokemon = this.http
              .get<Pokemon>(`${POKEMON_API}pokemon/${response.results[i].name}`)
              .subscribe({
                next: (pokemon) => {
                  this.pokemons?.push(pokemon);
                },
                error: (error) => {
                  console.log(error);
                }
              });
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  
  getPokemon(id: number): void {
    this.pokemonService.getPokemon(id).subscribe({
      next: (response) => {
        this.pokemon = response;
        this.pokemon.image = `${POKEMON_IMG_API}${id}.png`
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  getPokemonDetails(id: number): void {
    this.pokemonService.getPokemonDetails(id).subscribe({
      next: (response: PokemonDetails) => {
        this.pokemonDetails = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
