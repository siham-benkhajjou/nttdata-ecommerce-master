import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceFillterComponent } from './price-fillter.component';

describe('PriceFillterComponent', () => {
  let component: PriceFillterComponent;
  let fixture: ComponentFixture<PriceFillterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceFillterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceFillterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
