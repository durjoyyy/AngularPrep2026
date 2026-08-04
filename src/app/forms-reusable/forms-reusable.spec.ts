import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsReusable } from './forms-reusable';

describe('FormsReusable', () => {
  let component: FormsReusable;
  let fixture: ComponentFixture<FormsReusable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsReusable],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsReusable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
