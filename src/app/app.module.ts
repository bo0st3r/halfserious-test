import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StarshipSummaryComponent} from './star-wars/components/starship-summary/starship-summary.component';
import {StarshipsListComponent} from './star-wars/components/starships-list/starships-list.component';
import {HttpClientModule} from '@angular/common/http';
import {StarshipDetailsComponent} from './star-wars/components/starship-details/starship-details.component';
import {BackButtonComponent} from './route/component/back-button/back-button.component';
import {HomeButtonComponent} from './route/component/home-button/home-button.component';
import {PeopleDetailsComponent} from './star-wars/components/people-details/people-details.component';
import { PeopleSummaryComponent } from './star-wars/components/people-summary/people-summary.component';
import { LoadingComponent } from './dynamic-ui/components/loading/loading.component';
import { HeaderComponent } from './dynamic-ui/components/header/header.component';
import { CardComponent } from './layout/components/card/card.component';
import { SubTitleComponent } from './layout/components/sub-title/sub-title.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipSummaryComponent,
    StarshipsListComponent,
    StarshipDetailsComponent,
    BackButtonComponent,
    HomeButtonComponent,
    PeopleDetailsComponent,
    PeopleSummaryComponent,
    LoadingComponent,
    HeaderComponent,
    CardComponent,
    SubTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
