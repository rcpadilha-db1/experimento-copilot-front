import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ActionsComponent } from './actions/actions.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'actions', component: ActionsComponent },
  { path: 'details/:symbol', component: DetailsComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' },
  // },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
