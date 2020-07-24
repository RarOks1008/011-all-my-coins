import { Router } from '@angular/router';
import { CoinService } from './../../../coin.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-coin',
  templateUrl: './add-coin.component.html',
  styleUrls: ['./add-coin.component.scss']
})
export class AddCoinComponent implements OnInit {
  subscription: Subscription = new Subscription();
  edges;
  shapes;
  compositions;
  grades;
  valueReg = /^[0-9]+\s[A-z]+/;
  addCoinForm = this.formBuilder.group({
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

  constructor(private coinService: CoinService, private formBuilder: FormBuilder, private cd: ChangeDetectorRef, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
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
  }

  coinFormDiscard() {
    this.router.navigate(['/coin']);
  }

  coinFormSubmit() {
    if (this.addCoinForm.status === 'INVALID') {
      this.errorFunc("Could not submit", "Please check your input and try again.");
      return;
    }
    this.subscription.add(this.coinService.addCoin(this.addCoinForm.value).subscribe(
      response => {
        if (response == "OK") { this.successFunc("Success", "Coin added successfully. Redirecting you to home page."); }
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
        this.addCoinForm.patchValue({
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
        this.addCoinForm.patchValue({
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
      this.router.navigate(['/coin']);
    }, this.waitTime);
  }

  errorFunc(title, message) {
    this.toastr.error(message, title , {
      timeOut :  this.waitTime
    });
  }
}
