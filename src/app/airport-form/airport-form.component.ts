import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Airport } from '../shared/models/airport.model';

@Component({
  selector: 'app-airport-form',
  templateUrl: './airport-form.component.html',
  styleUrls: ['./airport-form.component.css'],
})
export class AirportFormComponent implements OnInit {
  @Output()
  public save = new EventEmitter<Airport>();

  @Input()
  public airport: Airport;

  constructor(private readonly fb: FormBuilder) {}

  public form: FormGroup;

  public ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.airport ? this.airport.name : '', [Validators.required, Validators.maxLength(100)]],
    });
  }

  public trackById<T extends { id?: number }>(entity: T) {
    return entity.id;
  }

  public onSaveClick(): void {
    this.save.emit({
      name: this.form.value.name,
    });
  }
}
