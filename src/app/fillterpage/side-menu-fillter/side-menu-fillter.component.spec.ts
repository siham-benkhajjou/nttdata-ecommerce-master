import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuFillterComponent } from './side-menu-fillter.component';

describe('SideMenuFillterComponent', () => {
  let component: SideMenuFillterComponent;
  let fixture: ComponentFixture<SideMenuFillterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuFillterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuFillterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
