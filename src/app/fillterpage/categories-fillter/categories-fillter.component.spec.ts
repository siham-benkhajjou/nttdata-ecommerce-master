import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFillterComponent } from './categories-fillter.component';

describe('CategoriesFillterComponent', () => {
  let component: CategoriesFillterComponent;
  let fixture: ComponentFixture<CategoriesFillterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesFillterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesFillterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
