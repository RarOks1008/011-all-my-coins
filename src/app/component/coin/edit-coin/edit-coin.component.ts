import { ToastrService } from 'ngx-toastr';
import { CoinService } from './../../../coin.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-coin',
  templateUrl: './edit-coin.component.html',
  styleUrls: ['./edit-coin.component.scss']
})
export class EditCoinComponent implements OnInit {
  subscription: Subscription = new Subscription();
  coinItem;
  edges;
  shapes;
  compositions;
  grades;
  private coin_id: number;
  valueReg = /^[0-9]+\s[A-z]+/;
  editCoinForm = this.formBuilder.group({
    coinValue: ['', Validators.pattern(this.valueReg)],
    coinYear: [''],
    coinCountry: [''],
    coinEmperor: [''],
    coinEdge: ['1'],
    coinShape: ['1'],
    coinComposition: ['1'],
    coinGrade: ['1'],
    coinDemonetized: [''],
    coinReference: [''],
    coinObservePic: new FormControl(null),
    coinObserveWriting: [''],
    coinReversePic: new FormControl(null),
    coinReverseWriting: [''],
    coinWeight: ['', Validators.min(0)],
    coinDiameter: ['', Validators.min(0)],
    coinThickness: ['', Validators.min(0)],
    coinCertified: [''],
    coinCertification: [''],
    coinComment: ['']
  });
  private waitTime = 3000;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private coinService: CoinService, private cd: ChangeDetectorRef, private toastr: ToastrService) { }

  ngOnInit() {
    var id_param = this.route.snapshot.params['id'];
    if (isNaN(id_param)) {
      this.router.navigate(['/coin']);
      return;
    }
    this.coin_id = id_param;
    this.subscription.add(this.coinService.getEdges().subscribe(
      response => { this.edges = response; },
      error => { this.errorFunc("Error", "Unexpected error occured. Please try again later."); }
    ));
    this.subscription.add(this.coinService.getShapes().subscribe(
      response => { this.shapes = response; },
      error => { this.errorFunc("Error", "Unexpected error occured. Please try again later."); }
    ));
    this.subscription.add(this.coinService.getCompositions().subscribe(
      response => { this.compositions = response; },
      error => { this.errorFunc("Error", "Unexpected error occured. Please try again later."); }
    ));
    this.subscription.add(this.coinService.getGrades().subscribe(
      response => { this.grades = response; },
      error => { this.errorFunc("Error", "Unexpected error occured. Please try again later."); }
    ));
    this.subscription.add(this.coinService.getEditCoin(this.coin_id).subscribe(
      response => {
        this.coinItem = response;
        if (!this.coinItem) {
          this.router.navigate(['/coin']);
        }
        this.patchValues();
      },
      error => { this.errorFunc("Error", "Unexpected error occured. Please try again later."); }
    ));
  }

  patchValues() {
    this.editCoinForm.patchValue({
      coinValue: this.coinItem.value,
      coinYear: this.coinItem.year,
      coinCountry: this.coinItem.country,
      coinEmperor: this.coinItem.emperor,
      coinEdge: this.coinItem.edge,
      coinShape: this.coinItem.shape,
      coinComposition: this.coinItem.composition,
      coinGrade: this.coinItem.grade,
      coinDemonetized: this.coinItem.demonetized,
      coinReference: this.coinItem.reference,
      coinObserveWriting: this.coinItem.observe_writing,
      coinReverseWriting: this.coinItem.reverse_writing,
      coinWeight: this.coinItem.weight,
      coinDiameter: this.coinItem.diameter,
      coinThickness: this.coinItem.thickness,
      
      coinComment: this.coinItem.comment
    });
    if (this.coinItem.certified !== 'No') {
      this.editCoinForm.patchValue({
        coinCertified: true,
        coinCertification: this.coinItem.certified,
      });
    }
  }

  coinFormDiscard() {
    this.router.navigate(['/coin/' + this.coin_id]);
  }

  coinFormSubmit() {
    if (this.editCoinForm.status === 'INVALID') {
      this.errorFunc("Could not submit", "Please check your input and try again.");
      return;
    }
    this.subscription.add(this.coinService.editCoin(this.editCoinForm.value, this.coin_id).subscribe(
      response => {
        if (response == "OK") { this.successFunc("Success", "Coin edited successfully. Redirecting you to coin page."); }
        else { this.errorFunc("Error", "Unexpected error occured. Please try again later."); }
      },
      error => { this.errorFunc("Error", "Unexpected error occured. Please try again later."); }
    ));
  }

  onObservePicChange(event) {
    let reader = new FileReader();
   
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.editCoinForm.patchValue({
          coinObservePic: reader.result
        });
        
        this.cd.markForCheck();
      };
    }
  }

  onReversePicChange(event) {
    let reader = new FileReader();
   
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.editCoinForm.patchValue({
          coinReversePic: reader.result
        });
        
        this.cd.markForCheck();
      };
    }
  }

  successFunc(title, message) {
    this.toastr.success(message, title , {
      timeOut :  this.waitTime
    });
    setTimeout(()=>{
      this.router.navigate(['/coin/' + this.coin_id]);
    }, this.waitTime);
  }

  errorFunc(title, message) {
    this.toastr.error(message, title , {
      timeOut :  this.waitTime
    });
  }
}
