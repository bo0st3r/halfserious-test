import {Component} from '@angular/core';
import {PeopleControllerService} from './star-wars/controllers/people-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'halfserious-technical-test';

  constructor(private peopleControllerService: PeopleControllerService) {
    this.peopleControllerService.getPeople();
  }
}
