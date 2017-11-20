import { Component, OnInit } from '@angular/core';
import { Hero, heroes } from './data-model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})

export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = heroes;
  }

  select(hero: Hero) {
    this.selectedHero = hero;
  }
}
