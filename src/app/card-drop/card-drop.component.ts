import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-drop',
  templateUrl: './card-drop.component.html',
  styleUrls: ['./card-drop.component.css']
})
export class CardDropComponent implements OnInit {

  @Input() film;

  constructor() { }

  ngOnInit() {
  }


}
