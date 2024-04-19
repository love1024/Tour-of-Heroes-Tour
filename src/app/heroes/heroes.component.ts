import { AfterViewInit, Component, OnInit, inject } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ShepherdService } from 'angular-shepherd';
import { getSteps } from '../steps';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit, AfterViewInit {
  heroes: Hero[] = [];
  steps = getSteps();
  shepherdService = inject(ShepherdService);

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  ngAfterViewInit(): void {
    this.shepherdService.defaultStepOptions = {
      cancelIcon: {
        enabled: false,
      },
    };
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps(this.steps.addHeroSteps);
    this.shepherdService.start();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
