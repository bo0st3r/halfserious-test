import { Component, OnInit } from '@angular/core';
import {StarshipControllerService} from '../../controllers/starship-controller.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  constructor(public starshipController: StarshipControllerService) { }

  ngOnInit(): void {
  }

}
