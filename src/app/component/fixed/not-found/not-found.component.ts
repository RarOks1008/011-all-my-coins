import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  secondPassed = false;
  waitTime = 30 * 1000;

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.secondPassed = true;
    }, this.waitTime);
  }

}
