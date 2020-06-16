import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneFormComponent } from './plane-form.component';

describe('PlaneFormComponent', () => {
  let component: PlaneFormComponent;
  let fixture: ComponentFixture<PlaneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
