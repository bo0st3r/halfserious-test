import {Component, Input, OnInit} from '@angular/core';
import {PeopleControllerService} from '../../controllers/people-controller.service';
import {PeopleDto} from '../../dto/people-dto';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  @Input()
  idPeople: string;
  people: PeopleDto;
  routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private peopleController: PeopleControllerService) {
  }

  ngOnInit(): void {
    if (this.idPeople) {
      this.getFromInput(this.idPeople);
    } else {
      this.getFromRoute();
    }
  }

  private getFromRoute(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const id = params.get('index');
      const peopleAtIndex = this.peopleController.getPeopleById(id);
      this.people = peopleAtIndex;
    });
  }

  private getFromInput(idPeople: string): void {
    this.people = this.peopleController.getPeopleById(idPeople);
  }
}
