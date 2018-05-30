import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSeatsComponent } from './live-seats.component';

describe('LiveSeatsComponent', () => {
  let component: LiveSeatsComponent;
  let fixture: ComponentFixture<LiveSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
