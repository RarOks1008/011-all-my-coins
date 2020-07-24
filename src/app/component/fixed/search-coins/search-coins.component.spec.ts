import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCoinsComponent } from './search-coins.component';

describe('SearchCoinsComponent', () => {
  let component: SearchCoinsComponent;
  let fixture: ComponentFixture<SearchCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
