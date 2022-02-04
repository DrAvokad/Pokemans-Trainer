import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../pokemon.service';
import { HttpClient } from '@angular/common/http';
import { POKEMON_IMG_API, POKEMON_API } from '../resources';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.css']
})
export class CataloguePageComponent implements OnInit {
  //Hardcoded Pokemon. Replace with imported list of pokemon from API.
  testImg: string = "../../assets/pokman.png";
  testImg2: string = "../../assets/saltshakermon.png";
  pokman: Pokemon;
  pokemans: Pokemon[] = [{"id":1, "name":"Carl the Destroyermon", "image":this.testImg, "collected": true}, {"id":2, "name":"Jah mon","image":this.testImg, "collected": false}, {"id":3, "name":"Chorizo","image":this.testImg, "collected": false}, {"id":32, "name":"Saltshakermon", "image":this.testImg2, "collected":true}]

  constructor(private pokemonService: PokemonService,
    private http: HttpClient) {
      this.pokman = {"id":0,"name":"Errormon","image":"500","collected":false}
     }

  getPokemons(offset: number, limit: number) {
    this.pokemonService.getPokemons(offset, limit)
       .subscribe({
        next: (response) => {
          for (let i = 0; i < limit; i++) {
            const pokemon = this.http
              .get<Pokemon>(`${POKEMON_API}pokemon/${response.results[i].name}`)
              .subscribe({
                next: (pokemon) => {
                  this.pokemans?.push(pokemon);
                },
                error: (error) => {
                  console.log(error);
                }
              });
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    }

    getPokemon(id: number): void {
      this.pokemonService.getPokemon(id).subscribe({
        next: (response) => {
          this.pokman = response;
          this.pokman.image = `${POKEMON_IMG_API}${id}.png`
        },
        error: (error) => {
          console.error(error);
        },
      });
    }

  ngOnInit(): void {
    this.getPokemons(20,20)
    this.getPokemon(1);
  }

}
