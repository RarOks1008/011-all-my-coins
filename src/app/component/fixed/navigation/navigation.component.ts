import { CoinService } from './../../../coin.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  onlyCertified = false;
  hasPicture = false;
  notDemonetized = false;
  orderValue = 'order-up';

  @Input()
  shouldShowFilterSort: string;

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.sendValues();
  }

  certClick() {
    this.onlyCertified = !this.onlyCertified;
    this.sendValues();
  }
  pictClick() {
    this.hasPicture = !this.hasPicture;
    this.sendValues();
  }
  demoClick() {
    this.notDemonetized = !this.notDemonetized;
    this.sendValues();
  }
  orderValueChange(value) {
    this.orderValue = value;
    this.sendValues();
  }

  sendValues() {
    var values = {
      certified: this.onlyCertified,
      picture: this.hasPicture,
      demonetized: this.notDemonetized,
      order: this.orderValue
    };
    this.coinService.setFilterOrder(values);
  }

}
