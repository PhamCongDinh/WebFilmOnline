import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhimComponent } from './components/phim/phim.component';
import { PlayphimComponent } from './components/playphim/playphim.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'phim/:id', component: PhimComponent },
  { path: 'playphim/:id', component: PlayphimComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
