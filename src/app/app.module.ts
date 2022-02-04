import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';
import { CataloguePageComponent } from './catalogue-page/catalogue-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import { PokemonTrainerComponent } from './pokemon-trainer/pokemon-trainer.component';
import { PokemonCatalogueComponent } from './pokemon-catalogue/pokemon-catalogue.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainerPageComponent,
    CataloguePageComponent, 
    LandingPageComponent, 
    PokemonListComponent, 
    PokemonListItemComponent, 
    PokemonTrainerComponent, 
    PokemonCatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
