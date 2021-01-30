import {Component, Input, OnInit} from '@angular/core';
import {StarshipDto} from '../../dto/starship-dto';
import {RequiredValidator} from '@angular/forms';

@Component({
  selector: 'app-starship-summary',
  templateUrl: './starship-summary.component.html',
  styleUrls: ['./starship-summary.component.scss']
})
export class StarshipSummaryComponent  {
  @Input()
  starship: StarshipDto;
  @Input()
  displayName: boolean;
  constructor() { }
}
