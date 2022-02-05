import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { PokemonDetails } from '../models/pokemon-details.model';
import { POKEMON_IMG_API, POKEMON_API } from '../resources';
import { PokemonList } from '../models/pokemonList.model';
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
  } 
}
