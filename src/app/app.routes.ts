import { Routes } from '@angular/router';
import { DetailsPublicationsComponent } from './components/details-publications/details-publications.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'home', component: HomeComponent },
  {
    path: 'detail-publication/:id',
    title: 'details',
    component: DetailsPublicationsComponent,
  },
];
