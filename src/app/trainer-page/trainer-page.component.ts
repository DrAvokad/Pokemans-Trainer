import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from '../models/pokemon-details.model';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {

  get details(): PokemonDetails {
    return this.pokemonService.details
  }
  get pokemon(): Pokemon {
    return this.pokemonService.pokemon
  }
  get pokemons(): Pokemon[] {
    return this.pokemonService.pokemons
  }

  constructor(private pokemonService: PokemonService) {  }

  ngOnInit(): void {
    this.pokemonService.apiGetPokemonDetails(1)
    this.pokemonService.apiGetPokemon(1);
    this.pokemonService.apiGetPokemons(20, 20)
  }

}
