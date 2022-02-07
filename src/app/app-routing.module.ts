import { NgModule } from '@angular/core';
import { CataloguePageComponent } from './catalogue-page/catalogue-page.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes = [
  {
    path: '',
    pathMatch: 'full', //Safe practice for displaying the first path
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LandingPageComponent,
  },
  {
    path: 'trainer',
    component: TrainerPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'catalogue',
    component: CataloguePageComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
