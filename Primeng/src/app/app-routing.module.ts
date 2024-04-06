import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhimComponent } from './components/phim/phim.component';
import { PlayphimComponent } from './components/playphim/playphim.component';
import { LichsuxemComponent } from './components/lichsuxem/lichsuxem.component';
import { AdminComponent } from './components/admin/admin.component';
import { NewtapphimComponent } from './components/newtapphim/newtapphim.component';
import { HomeadminComponent } from './components/homeadmin/homeadmin.component';
import { EditfilmsComponent } from './components/editfilms/editfilms.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'phim/:id', component: PhimComponent },
  { path: 'playphim/:id', component: PlayphimComponent },
  { path: 'lichsuxemphim', component: LichsuxemComponent },
  { path: 'newphim', component: AdminComponent },
  { path: 'newtapphim', component: NewtapphimComponent },
  { path: 'homeadmin', component: HomeadminComponent },
  { path: 'edits/:id', component: EditfilmsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
