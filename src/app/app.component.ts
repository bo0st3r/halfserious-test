import {Component} from '@angular/core';
import {PeopleControllerService} from './star-wars/controllers/people-controller.service';
import {StarshipControllerService} from './star-wars/controllers/starship-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'halfserious-technical-test';

  constructor(private peopleControllerService: PeopleControllerService,
              private starshipController: StarshipControllerService) {
    this.peopleControllerService.getPeople();
    this.starshipController.getStarships();
  }
}
