import {Component, Input, OnInit} from '@angular/core';
import {StarshipDto} from '../../dto/starship-dto';
import {RequiredValidator} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-starship-summary',
  templateUrl: './starship-summary.component.html',
  styleUrls: ['./starship-summary.component.scss']
})
export class StarshipSummaryComponent {
  @Input()
  starship: StarshipDto;

  constructor() {
  }
}
