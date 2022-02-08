import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PokemonDetails } from '../models/pokemon-details.model';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { TrainesService } from '../services/trainers.service';
import { USER_KEY } from '../services/trainers.service';
import { POKEMON_IMG_API } from '../resources';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css'],
})
export class TrainerPageComponent implements OnInit {
  private _trainer: Trainer = {
    id: 0,
    username: '',
    pokemon: [{ name: '', id: 0 }],
  };
  
  private strObj: string | null = '';
  private pokemon: Pokemon = { id: 0, name: 'Errormon', image: `${POKEMON_IMG_API}${0}.png`, collected: true };
  constructor() {
    if (localStorage.getItem(USER_KEY) !== null) {
      this.strObj = localStorage.getItem(USER_KEY);
      this._trainer = JSON.parse(this.strObj || '');
    }
  }
  username: string = '';
  pokemons: Pokemon[] = [];

  ngOnInit(): void {
  this.username = this._trainer.username;

    for (let i = 0; i < this._trainer.pokemon.length; i++) {
      this.pokemon = {
        id: this._trainer.pokemon[i].id,
        name: this._trainer.pokemon[i].name,
        image: `${POKEMON_IMG_API}${this._trainer.pokemon[i].id}.png`,
        collected: true,
      };

      this.pokemons.push(this.pokemon)
    }
  }
}
