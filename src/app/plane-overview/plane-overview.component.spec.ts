import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneOverviewComponent } from './plane-overview.component';

describe('PlaneOverviewComponent', () => {
  let component: PlaneOverviewComponent;
  let fixture: ComponentFixture<PlaneOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
