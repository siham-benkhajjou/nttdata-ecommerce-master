import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundBodyComponent } from './not-found-body.component';

describe('NotFoundBodyComponent', () => {
  let component: NotFoundBodyComponent;
  let fixture: ComponentFixture<NotFoundBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
