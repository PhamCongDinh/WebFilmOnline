import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PhimComponent } from './components/phim/phim.component';
import { PlayphimComponent } from './components/playphim/playphim.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { LichsuxemComponent } from './components/lichsuxem/lichsuxem.component';
import { ImageModule } from 'primeng/image';
import { AdminComponent } from './components/admin/admin.component';
import { NewtapphimComponent } from './components/newtapphim/newtapphim.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeadminComponent } from './components/homeadmin/homeadmin.component';
import { TableModule } from 'primeng/table';
import { EditfilmsComponent } from './components/editfilms/editfilms.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhimComponent,
    PlayphimComponent,
    LichsuxemComponent,
    AdminComponent,
    NewtapphimComponent,
    HomeadminComponent,
    EditfilmsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToolbarModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    MenubarModule,
    PaginatorModule,
    CardModule,
    InputTextareaModule,
    RatingModule,
    ImageModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
