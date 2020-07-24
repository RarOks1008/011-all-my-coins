import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-coin-fallin',
  templateUrl: './coin-fallin.component.html',
  styleUrls: ['./coin-fallin.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition("void => *", [
        style({'bottom': '0px', 'top': '900px'}),
        animate(3000)
      ])
    ]),
  ]
})
export class CoinFallinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
