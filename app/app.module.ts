import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {DashboardComponent} from './dashboard.component';
import {routing} from './app.routing';


import {HeroesComponent} from './heroes.component';
import {HeroSearchComponent} from './hero-search.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {HttpModule} from '@angular/http';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import './rxjs-extensions';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    providers : [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }