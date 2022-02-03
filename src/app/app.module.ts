import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';
import { CataloguePageComponent } from './catalogue-page/catalogue-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { ErrorMessageComponent } from './error-message/error-message.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainerPageComponent,
    CataloguePageComponent, 
    LandingPageComponent,
    PokemonDetailComponent,
    ErrorMessageComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
