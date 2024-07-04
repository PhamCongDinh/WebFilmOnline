import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FilmitemComponent } from './components/filmitem/filmitem.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { FilmdetailComponent } from './components/filmdetail/filmdetail.component';
import { WatchfilmComponent } from './components/watchfilm/watchfilm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FilmitemComponent,
    FilmdetailComponent,
    WatchfilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
