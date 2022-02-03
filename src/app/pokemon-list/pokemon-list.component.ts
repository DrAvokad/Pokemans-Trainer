import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor() { }

  pokemons: String[] = ["charmon", "piemon", "cucumbermon"]
  ngOnInit(): void {
  }

}
