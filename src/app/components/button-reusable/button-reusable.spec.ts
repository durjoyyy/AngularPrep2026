import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonReusable } from './button-reusable';

describe('ButtonReusable', () => {
  let component: ButtonReusable;
  let fixture: ComponentFixture<ButtonReusable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonReusable],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonReusable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
