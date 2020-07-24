import { ToastrService } from 'ngx-toastr';
import { CoinService } from './../../../coin.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-coin',
  templateUrl: './single-coin.component.html',
  styleUrls: ['./single-coin.component.scss']
})
export class SingleCoinComponent implements OnInit {
  subscription: Subscription = new Subscription();
  private coin_id: number;
  public selectedImage = {src: '', alt: ''};
  coinItem;
  private waitTime = 3000;

  constructor(private route: ActivatedRoute, private router: Router, private coinService: CoinService, private toastr: ToastrService) { }

  ngOnInit() {
    var id_param = Number(this.route.snapshot.params['id']);
    if (isNaN(id_param)) {
      this.router.navigate(['/coin']);
      return;
    }
    this.coin_id = id_param;
    this.subscription.add(this.coinService.getCoin(this.coin_id).subscribe(
      response => {
        this.coinItem = response;
        if (!this.coinItem) {
          this.router.navigate(['/coin']);
        }
      },
      error => { this.errorFunc("Error", "Unexpected error occured. Please try again later."); }
    ));
  }

  public enlargeImage(imageSrc, imageAlt): void {
    this.selectedImage.src = imageSrc;
    this.selectedImage.alt = imageAlt;
  }

  editClick() {
    this.router.navigate(['/coin/edit/' + this.coin_id]);
  }

  deleteClick() {
    this.subscription.add(this.coinService.deleteCoin(this.coin_id).subscribe(
      response => { this.successFunc("Success", "Coin deleted successfully. Redirecting you to home page."); },
      error => { this.errorFunc("Error", "Unexpected error occured. Please try again later."); }
    ));
  }

  successFunc(title, message) {
    this.toastr.success(message, title , {
      timeOut :  this.waitTime
    });
    setTimeout(()=>{
      this.router.navigate(['/coin']);
    }, this.waitTime);
  }

  errorFunc(title, message) {
    this.toastr.error(message, title , {
      timeOut :  this.waitTime
    });
  }
}
