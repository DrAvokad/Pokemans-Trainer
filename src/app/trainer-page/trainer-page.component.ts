import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemans';
import { PokemonDetails } from '../models/pokemon-details.model';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';


@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {
  constructor(private router: Router,
    private pokemonService: PokemonService) {}

  get details(): PokemonDetails {
    return this.pokemonService.details
  }
  get pokemon(): Pokemon {
    return this.pokemonService.pokemon
  }
  get pokemons(): Pokemon[] {
    return this.pokemonService.pokemons
  }

  ngOnInit(): void {
    // fetch user
    this.pokemonService.apiGetPokemonDetails(1)
    this.pokemonService.apiGetPokemon(5);
    this.pokemonService.apiGetPokemons(0, 20)
  }


}
