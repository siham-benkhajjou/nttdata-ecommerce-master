import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingFillterComponent } from './rating-fillter.component';

describe('RatingFillterComponent', () => {
  let component: RatingFillterComponent;
  let fixture: ComponentFixture<RatingFillterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingFillterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingFillterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
