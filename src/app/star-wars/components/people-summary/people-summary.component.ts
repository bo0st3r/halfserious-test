import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {PeopleDto} from '../../dto/people-dto';
import {ActivatedRoute} from '@angular/router';
import {PeopleControllerService} from '../../controllers/people-controller.service';
import {Subscription} from 'rxjs';
import {IdExtractorService} from '../../services/id-extractor.service';

@Component({
  selector: 'app-people-summary',
  templateUrl: './people-summary.component.html',
  styleUrls: ['./people-summary.component.scss']
})
export class PeopleSummaryComponent implements OnInit, OnDestroy {
  @Input()
  peopleIndex: string;
  @Input()
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
