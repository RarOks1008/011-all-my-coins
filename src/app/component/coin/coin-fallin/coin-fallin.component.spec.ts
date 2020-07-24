import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinFallinComponent } from './coin-fallin.component';

describe('CoinFallinComponent', () => {
  let component: CoinFallinComponent;
  let fixture: ComponentFixture<CoinFallinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinFallinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinFallinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
