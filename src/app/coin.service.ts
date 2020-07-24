import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  serviceFilterOrder = {
    certified: false,
    picture: false,
    demonetized: false,
    order: 'order-up',
    search: ''
  };
  private messageSource = new BehaviorSubject(this.serviceFilterOrder);
  currentMessage = this.messageSource.asObservable();
  header = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  };

  constructor(private service: HttpClient) { }

  getEdges() {
    var edges = this.service.get("http://localhost/all-my-coins-php/edges.php", this.header);
    return edges;
  }

  getShapes() {
    var shapes = this.service.get("http://localhost/all-my-coins-php/shapes.php", this.header);
    return shapes;
  }

  getCompositions() {
    var compositions = this.service.get("http://localhost/all-my-coins-php/compositions.php", this.header);
    return compositions;
  }

  getGrades() {
    var grades = this.service.get("http://localhost/all-my-coins-php/grades.php", this.header);
    return grades;
  }

  addCoin(data) {
    var response = this.service.post("http://localhost/all-my-coins-php/add_coin.php", data);
    return response;
  }

  getCoins(filterOrder) {
    var location = "http://localhost/all-my-coins-php/get_coins.php?cert=" + filterOrder.certified + "&pic=" + filterOrder.picture + "&dem=" + filterOrder.demonetized + "&srtx=" + filterOrder.search + "&order=" + filterOrder.order;
    var coins = this.service.get(location, this.header);
    return coins;
  }

  getCoin(id) {
    var coin = this.service.get("http://localhost/all-my-coins-php/get_coin.php?id="+id, this.header);
    return coin;
  }

  getEditCoin(id) {
    var coin = this.service.get("http://localhost/all-my-coins-php/get_edit_coin.php?id="+id, this.header);
    return coin;
  }

  editCoin(data, id) {
    var response = this.service.post("http://localhost/all-my-coins-php/edit_coin.php?id="+id, data);
    return response;
  }

  deleteCoin(id) {
    var response = this.service.get("http://localhost/all-my-coins-php/delete_coin.php?id="+id, this.header);
    return response;
  }

  coinCount() {
    var num = this.service.get("http://localhost/all-my-coins-php/coin_number.php", this.header);
    return num;
  }

  setFilterOrder(filterOrder) {
    this.serviceFilterOrder.certified = filterOrder.certified;
    this.serviceFilterOrder.demonetized = filterOrder.demonetized;
    this.serviceFilterOrder.order = filterOrder.order;
    this.serviceFilterOrder.picture = filterOrder.picture;
    this.messageSource.next(this.serviceFilterOrder);
  }

  setSearchText(searchText) {
    this.serviceFilterOrder.search = searchText;
    this.messageSource.next(this.serviceFilterOrder);
  }
}
