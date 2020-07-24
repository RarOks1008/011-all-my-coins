import { CoinService } from './../../../coin.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-area',
  templateUrl: './title-area.component.html',
  styleUrls: ['./title-area.component.scss']
})
export class TitleAreaComponent implements OnInit {
  coinNumber;
  subscription: Subscription = new Subscription();

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.subscription.add(this.coinService.coinCount().subscribe(
      response => { this.coinNumber = response; },
      error => { this.coinNumber = {number: 0}; }
    ))
  }

}
