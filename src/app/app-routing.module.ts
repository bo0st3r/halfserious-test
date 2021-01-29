import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StarshipsListComponent} from './star-wars/components/starships-list/starships-list.component';
import {StarshipDetailsComponent} from './star-wars/components/starship-details/starship-details.component';
import {PeopleDetailsComponent} from './star-wars/components/people-details/people-details.component';

const routes: Routes = [
  {
    path: 'starships',
    component: StarshipsListComponent
  },
  {
    path: 'starship/:index',
    component: StarshipDetailsComponent
  },
  {
    path: 'people/:index',
    component: PeopleDetailsComponent
  },
  {
    path: '**',
    component: StarshipsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
