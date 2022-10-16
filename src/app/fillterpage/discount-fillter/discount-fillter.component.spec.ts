import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountFillterComponent } from './discount-fillter.component';

describe('DiscountFillterComponent', () => {
  let component: DiscountFillterComponent;
  let fixture: ComponentFixture<DiscountFillterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountFillterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountFillterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
