import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCoinComponent } from './author-coin.component';

describe('AuthorCoinComponent', () => {
  let component: AuthorCoinComponent;
  let fixture: ComponentFixture<AuthorCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
