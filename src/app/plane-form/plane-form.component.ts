import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Airport } from '../shared/models/airport.model';
import { Plane } from '../shared/models/plane.model';

@Component({
  selector: 'app-plane-form',
  templateUrl: './plane-form.component.html',
  styleUrls: ['./plane-form.component.css'],
})
export class PlaneFormComponent implements OnInit {
  @Output()
  public save = new EventEmitter<Plane>();

  @Input()
  public plane: Plane;

  @Input()
  public airports: Airport[];

  constructor(private readonly fb: FormBuilder) {}

  public form: FormGroup;

  public ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.plane ? this.plane.name : '', [Validators.required, Validators.maxLength(100)]],
      airport: [this.plane ? this.plane.airport : '', [Validators.required]],
    });
  }

  public compareFn<T extends { id?: number }>(entity1: T, entity2: T): boolean {
    return entity1 && entity2 && entity1.id === entity2.id;
  }

  public onSaveClick(): void {
    this.save.emit({
      name: this.form.value.name,
      airport: this.form.value.airport,
    });
  }
}
