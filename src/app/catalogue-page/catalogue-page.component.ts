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
  
  //Index to use for offset when downloading pokemon from the API
  private loadingIndex: number = 0;

  constructor(private pokemonService: PokemonService, private trainerService: TrainesService,
    private router: Router) { }

  //List of currently displayed pokemons fetched from Pokemon Service
  get pokemons(): Pokemon[] {
    return this.pokemonService.pokemons;
  }

  //Username of currently logged in user fetched from Trainer API
  get username(): string {
    return this.trainerService.username;
  }

  //Fetches the first 20 Pokemon in the API from the Pokemon Service
  ngOnInit(): void {
    this.pokemonService.apiGetPokemons(this.loadingIndex, 20);
  }

  //Increases the index by 20 to fetch 20 new Pokemon from the Pokemon Service.
  handleLoadNext(): void {
    this.loadingIndex += 20;
    this.pokemonService.apiGetPokemons(this.loadingIndex, 20)
  }

  //Decreases the index by 20 to fetch the 20 pervious Pokemon from the Pokemon Service.
  handleLoadPrevious(): void {
    if (this.loadingIndex !== 0) {
      this.loadingIndex -= 20;
      this.pokemonService.apiGetPokemons(this.loadingIndex, 20);
    }
  }

  //Uses the router to go navigate to the Trainer Page
  goToTrainerPage(): void {
    this.router.navigateByUrl("/trainer")
  }
}
