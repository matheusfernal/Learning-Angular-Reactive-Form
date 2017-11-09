import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { states } from './data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
  heroForm: FormGroup;
  states = states;

  constructor(private formBuilder: FormBuilder)  {
    this.createForm();
  }

  createForm(): void {
    this.heroForm = this.formBuilder.group({
      name: ['', Validators.required],
      street: '',
      city: '',
      statate: '',
      zip: '',
      power: '',
      sidekick: ''
    });
  }
}
