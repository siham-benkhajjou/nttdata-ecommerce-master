import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillterpageComponent } from './fillterpage.component';

describe('FillterpageComponent', () => {
  let component: FillterpageComponent;
  let fixture: ComponentFixture<FillterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillterpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
