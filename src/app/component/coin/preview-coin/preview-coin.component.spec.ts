import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCoinComponent } from './preview-coin.component';

describe('PreviewCoinComponent', () => {
  let component: PreviewCoinComponent;
  let fixture: ComponentFixture<PreviewCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
