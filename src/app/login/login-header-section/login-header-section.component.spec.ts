import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHeaderSectionComponent } from './login-header-section.component';

describe('LoginHeaderSectionComponent', () => {
  let component: LoginHeaderSectionComponent;
  let fixture: ComponentFixture<LoginHeaderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginHeaderSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginHeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
