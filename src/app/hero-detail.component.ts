import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { states, Address, Hero } from './data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
  heroForm: FormGroup;
  states = states;

  constructor(private formBuilder: FormBuilder)  {
    this.createForm();
  }

  createForm(): void {
    this.heroForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: this.formBuilder.group(new Address()),
      power: '',
      sidekick: ''
    });
  }
}
