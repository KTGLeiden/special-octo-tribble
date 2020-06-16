import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportOverviewComponent } from './airport-overview.component';

describe('AirportOverviewComponent', () => {
  let component: AirportOverviewComponent;
  let fixture: ComponentFixture<AirportOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
