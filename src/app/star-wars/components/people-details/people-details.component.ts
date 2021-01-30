import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PeopleControllerService} from '../../controllers/people-controller.service';
import {PeopleDto} from '../../dto/people-dto';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit, OnDestroy {
  @Input()
  peopleIndex: string;
  people: PeopleDto;
  routeSubscription: Subscription;
  peopleSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private peopleController: PeopleControllerService) {
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      this.peopleIndex = params.get('index');
    });

    this.peopleSubscription = this.peopleController.peopleObservable().subscribe(peopleMap => {
      if (!this.people && peopleMap && peopleMap.size > Number(this.peopleIndex)) {
        this.people = peopleMap.get(this.peopleIndex);
      }
    });
  }

  ngOnDestroy(): void {
    this.peopleSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
}
