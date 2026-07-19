import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleRealted } from './style-realted';

describe('StyleRealted', () => {
  let component: StyleRealted;
  let fixture: ComponentFixture<StyleRealted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleRealted],
    }).compileComponents();

    fixture = TestBed.createComponent(StyleRealted);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
