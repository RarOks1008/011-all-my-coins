import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCoinShowComponent } from './no-coin-show.component';

describe('NoCoinShowComponent', () => {
  let component: NoCoinShowComponent;
  let fixture: ComponentFixture<NoCoinShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoCoinShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCoinShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
