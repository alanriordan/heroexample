import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {Router} from '@angular/router';



@Component({
    selector : 'my-heroes',
    styleUrls: ['app/heroes.component.css'],
    templateUrl:'app/heroes.component.html'
})
export class HeroesComponent implements OnInit{
   
    selectedHero : Hero;
    heroes : Hero[];
    constructor(private _heroService:HeroService, private router:Router){};

    getHeroes() : void{
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    

    ngOnInit() : void {
        this.getHeroes();
    }

    onSelect(hero: Hero){
        this.selectedHero = hero;
    }

    gotoDetail():void{
      this.router.navigate(['/detail', this.selectedHero.id]);
    }

    delete(hero: Hero): void {
      this._heroService
          .delete(hero.id)
          .then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) { this.selectedHero = null; }
          });
}

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this._heroService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
    });
}

}

