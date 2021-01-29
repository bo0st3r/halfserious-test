import {Component, Input, OnInit} from '@angular/core';
import {PeopleDto} from '../../dto/people-dto';
import {ActivatedRoute} from '@angular/router';
import {PeopleControllerService} from '../../controllers/people-controller.service';
import {Subscription} from 'rxjs';
import {IdExtractorService} from '../../service/id-extractor.service';

@Component({
  selector: 'app-people-summary',
  templateUrl: './people-summary.component.html',
  styleUrls: ['./people-summary.component.scss']
})
export class PeopleSummaryComponent implements OnInit {
  @Input()
  idPeople: string;
  @Input()
  people: PeopleDto;
  routeSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private peopleController: PeopleControllerService,
              private idExtractor: IdExtractorService) {
  }

  ngOnInit(): void {
    console.log('onInit id', this.idPeople);
    if (this.idPeople) {
      this.idPeople = this.idExtractor.fromPeopleUrl(this.idPeople);
      this.getFromInput(this.idPeople);
    } else {
      this.getFromRoute();
    }
  }

  private getFromRoute(): void {
    console.log('route');
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const id = params.get('index');
      const peopleAtIndex = this.peopleController.getPeopleById(id);
      this.people = peopleAtIndex;
    });
  }

  private getFromInput(idPeople: string): void {
    console.log('input');
    this.people = this.peopleController.getPeopleById(idPeople);
    console.log('id', this.peopleController.people);
  }
}
