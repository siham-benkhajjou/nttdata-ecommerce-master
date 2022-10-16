import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header404Component } from './header404.component';

describe('Header404Component', () => {
  let component: Header404Component;
  let fixture: ComponentFixture<Header404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Header404Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
