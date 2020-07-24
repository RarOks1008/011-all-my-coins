import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-author-coin',
  templateUrl: './author-coin.component.html',
  styleUrls: ['./author-coin.component.scss'],
  animations: [
    trigger('rotatedState', [
        state('default', style({ transform: 'rotate(0)' })),
        state('rotated', style({ transform: 'rotate(720deg)' })),
        transition('rotated => default', animate('1000ms ease-in')),
        transition('default => rotated', animate('1000ms ease-in'))
    ])
  ]
})
export class AuthorCoinComponent implements OnInit {
  state: string = 'default';

  constructor() { }

  ngOnInit() {
  }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
}

}
