import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CoinService } from './../../coin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  subscription: Subscription = new Subscription();
  coins;
  filterOrder;
  private waitTime = 3000;

  constructor(private coinService: CoinService, private toastr: ToastrService) { }

  ngOnInit() {
    this.coinService.currentMessage.subscribe(data => { this.filterOrder = data; this.getCoins(); });
  }

  errorFunc(title, message) {
    this.toastr.error(message, title , {
      timeOut :  this.waitTime
    });
  }

  getCoins() {
    this.subscription.add(this.coinService.getCoins(this.filterOrder).subscribe(
      response => {
        this.coins = response;
      },
      error => { this.errorFunc("Error", "Unexpected error occured. Please try again later."); }
    ));
  }
}
