import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { PokemonDetails } from '../models/pokemon-details.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) {
    this.pokemon = {id: 1, name: "", image:"", collected: false}
  }

  text = "Show more"
  btnToggle = false

  get details(): PokemonDetails {
    return this.pokemonService.details;
  }

  ngOnInit(): void {
  }

  handleGetDetails() {
    this.pokemonService.apiGetPokemonDetails(this.pokemon.id)

    console.log(this.details)

    this.btnToggle = !this.btnToggle
    if(this.btnToggle) this.text = "Show less"
    else this.text = "Show more"
  }
}
