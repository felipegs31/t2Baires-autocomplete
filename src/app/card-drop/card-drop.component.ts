import { Component, OnInit, Input } from '@angular/core';
import { FilmModel } from './../models/film.model';

@Component({
  selector: 'app-card-drop',
  templateUrl: './card-drop.component.html',
  styleUrls: ['./card-drop.component.css']
})
export class CardDropComponent implements OnInit {

  // films input
  @Input() film = {};

  constructor() { }

  ngOnInit() {
  }

}
