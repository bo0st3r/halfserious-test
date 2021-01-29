import { Component, OnInit } from '@angular/core';
import {StarshipControllerService} from '../../controllers/starship-controller.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  constructor(public starshipController: StarshipControllerService) { }

  ngOnInit(): void {

  }

}
