import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HierarchyComponent } from './pages/hierarchy/hierarchy.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { NavComponent } from './components/nav/nav.component';

import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule } from '@angular/material/slider';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SafePipe } from './safe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HierarchyComponent,
    JoinUsComponent,
    NavComponent,
    NewsComponent,
    FooterComponent,
    SideBarComponent,
    WeatherComponent,
    SafePipe,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
