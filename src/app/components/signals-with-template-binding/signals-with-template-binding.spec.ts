import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsWithTemplateBinding } from './signals-with-template-binding';

describe('SignalsWithTemplateBinding', () => {
  let component: SignalsWithTemplateBinding;
  let fixture: ComponentFixture<SignalsWithTemplateBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsWithTemplateBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsWithTemplateBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
