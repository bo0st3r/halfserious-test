import {Component, Input, OnInit} from '@angular/core';
import {StarshipDto} from '../../dto/starship-dto';

@Component({
  selector: 'app-starship-summary',
  templateUrl: './starship-summary.component.html',
  styleUrls: ['./starship-summary.component.css']
})
export class StarshipSummaryComponent  {
  @Input()
  starship: StarshipDto;
  constructor() { }
}
