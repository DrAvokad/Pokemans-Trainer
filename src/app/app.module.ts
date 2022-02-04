import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';
import { CataloguePageComponent } from './catalogue-page/catalogue-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
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
    PokemonDetailComponent,
    ErrorMessageComponent, 
    PokemonListComponent, 
    PokemonListItemComponent, 
    PokemonTrainerComponent, 
    PokemonCatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
