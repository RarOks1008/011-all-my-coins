import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-coin',
  templateUrl: './preview-coin.component.html',
  styleUrls: ['./preview-coin.component.scss']
})
export class PreviewCoinComponent implements OnInit {
  @Input() coin: {id: number, country: string, value: string, year: number, grade: string, certified: string, observe_pic: string, reverse_pic: string, observe_writing: string, reverse_writing: string} ;

  constructor() { }

  ngOnInit(): void {
  }

}
