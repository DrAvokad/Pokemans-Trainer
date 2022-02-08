import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonDetails } from '../models/pokemon-details.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {

  constructor(private pokemonService: PokemonService) {
  }

  get details(): PokemonDetails | null {
    return this.pokemonService.details;
  }

  onClick(): void {
    this.pokemonService.resetDetails();
  }

  ngOnInit(): void {
  }

}
