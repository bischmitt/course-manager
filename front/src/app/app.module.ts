import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Erro404Component } from './404//erro404.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { NavBarComponent } from './courses/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Erro404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoursesModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
