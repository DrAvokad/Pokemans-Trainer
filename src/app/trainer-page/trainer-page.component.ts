import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from '../models/pokemon-details.model';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css'],
})
export class TrainerPageComponent implements OnInit {
  constructor(
    private pokemonService: PokemonService,
    private userService: UserService
  ) {}

  user = localStorage.getItem('user')

  get pokemon(): Pokemon {
    return this.pokemonService.pokemon
  }

  pokemons: Pokemon[] = [{id: 0, name: "bulbasaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", collected: false}]

  ngOnInit(): void {
    // fetch user
  }
}