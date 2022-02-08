import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { TrainesService } from '../services/trainers.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.css']
})

export class CataloguePageComponent implements OnInit {
  
  private loadingIndex: number = 0;

  constructor(private pokemonService: PokemonService, private trainerService: TrainesService,
    private router: Router) { }

  get pokemons(): Pokemon[] {
    return this.pokemonService.pokemons;
  }

  get username(): string {
    return this.trainerService.username;
  }

  ngOnInit(): void {
    this.pokemonService.apiGetPokemons(this.loadingIndex, 20);
  }

  handleLoadNext(): void {
    this.loadingIndex += 20;
    this.pokemonService.apiGetPokemons(this.loadingIndex, 20)
  }

  handleLoadPrevious(): void {
    if (this.loadingIndex !== 0) {
      this.loadingIndex -= 20;
      this.pokemonService.apiGetPokemons(this.loadingIndex, 20);
    }
  }

  goToTrainerPage(): void {
    this.router.navigateByUrl("/trainer")
  }

  userFunction(): void {
    console.log("trainer is: ", this.trainerService.trainer)
  }
}
