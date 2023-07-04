import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { FilmeListComponent } from './filmes/filme-list.component';
import { StarComponent } from './star/star.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/404.component';
import { FilmeInfoComponent } from './filmes/filme-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FilmeListComponent,
    StarComponent,
    NavbarComponent,
    Error404Component,
    FilmeInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { 
        path: 'filmes/create', component: FilmeInfoComponent 
      },
      {
        path: 'filmes', component: FilmeListComponent
      },
      {
        path: 'filmes/info/:id', component: FilmeInfoComponent
      },
      {
        path: '', redirectTo: 'filmes', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
    ]),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
