import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDimensionArrayComponent } from './two-dimension-array.component';

describe('TwoDimensionArrayComponent', () => {
  let component: TwoDimensionArrayComponent;
  let fixture: ComponentFixture<TwoDimensionArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoDimensionArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDimensionArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
