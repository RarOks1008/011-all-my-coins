import { CoinService } from './../../../coin.service';
import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-coins',
  templateUrl: './search-coins.component.html',
  styleUrls: ['./search-coins.component.scss']
})
export class SearchCoinsComponent implements OnInit {
  searchText = '';

  constructor(private coinService: CoinService) { }

  ngOnInit() {
  }
  
  searchSubmit() {
    this.coinService.setSearchText(this.searchText);
  }

  searchTextChange(event) {
    if (event.key !== "Enter") { return; }
    this.searchSubmit();
  }

}
