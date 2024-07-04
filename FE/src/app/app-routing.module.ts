import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmdetailComponent } from './components/filmdetail/filmdetail.component';
import { WatchfilmComponent } from './components/watchfilm/watchfilm.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filmdetail/:id', component: FilmdetailComponent },
  { path: 'watchingfilm/:id', component: WatchfilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
