import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypes } from './event-types';

describe('EventTypes', () => {
  let component: EventTypes;
  let fixture: ComponentFixture<EventTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTypes],
    }).compileComponents();

    fixture = TestBed.createComponent(EventTypes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
