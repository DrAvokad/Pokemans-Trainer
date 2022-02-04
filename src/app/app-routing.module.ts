import { NgModule } from '@angular/core';
import { CataloguePageComponent } from './catalogue-page/catalogue-page.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes = [
  {
    path: '', 
    component: LandingPageComponent,
    pathMatch: 'full' //Safe practice for displaying the first path
  },
  { path: 'trainer', component: TrainerPageComponent },
  { path: 'catalogue', component: CataloguePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
