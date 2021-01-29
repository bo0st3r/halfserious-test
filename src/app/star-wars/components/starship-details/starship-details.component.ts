import {Component, OnDestroy, OnInit} from '@angular/core';
import {StarshipDto} from '../../dto/starship-dto';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {StarshipControllerService} from '../../controllers/starship-controller.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit, OnDestroy {
  starship: StarshipDto;
  routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private starshipController: StarshipControllerService) {
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const index = params.get('index');
      const starshipAtIndex = this.starshipController.starships[index];
      this.starship = starshipAtIndex;
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
