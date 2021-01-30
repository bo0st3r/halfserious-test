import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.scss']
})
export class SubTitleComponent implements OnInit {
  @Input()
  imgSrc: string;
  @Input()
  imgAlt: string;

  constructor() { }

  ngOnInit(): void {
  }

}
