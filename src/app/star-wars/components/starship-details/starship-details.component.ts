import {Component, OnDestroy, OnInit} from '@angular/core';
import {StarshipDto} from '../../dto/starship-dto';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {StarshipControllerService} from '../../controllers/starship-controller.service';
import {IdExtractorService} from '../../services/id-extractor.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss']
})
export class StarshipDetailsComponent implements OnInit, OnDestroy {
  starship: StarshipDto = null;
  routeSubscription: Subscription;
  starshipsSubscription: Subscription;
  private starshipIndex: number;

  constructor(private route: ActivatedRoute,
              private starshipController: StarshipControllerService,
              public idExtractor: IdExtractorService) {
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const starshipIndexString = params.get('index');
      this.starshipIndex = Number(starshipIndexString);
    });

    this.starshipsSubscription = this.starshipController.starshipsObservable().subscribe(starships => {
      if (!this.starship && starships && starships.length > this.starshipIndex) {
        this.starship = starships[this.starshipIndex];
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.starshipsSubscription.unsubscribe();
  }

  extractId(id: string): string {
    const s = this.idExtractor.fromPeopleUrl(id);
    return s;
  }
}
