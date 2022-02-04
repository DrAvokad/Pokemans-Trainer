import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})

export class PokemonDetailComponent implements OnInit {
  constructor(private pokemonService: PokemonService) { }

  pokemons: Pokemon[] = [];

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons)
  }
}
