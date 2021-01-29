import {Component, Input, OnInit} from '@angular/core';
import {PeopleDto} from '../../dto/people-dto';
import {ActivatedRoute} from '@angular/router';
import {PeopleControllerService} from '../../controllers/people-controller.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-people-summary',
  templateUrl: './people-summary.component.html',
  styleUrls: ['./people-summary.component.css']
})
export class PeopleSummaryComponent implements OnInit {
  @Input()
  idPeople: string;
  @Input()
  people: PeopleDto;
  routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private peopleController: PeopleControllerService) {
  }

  ngOnInit(): void {
    console.log('onInit id', this.idPeople);
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
    console.log('id', this.peopleController.people);
  }
}
