import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FormsModule } from "@angular/forms";
import {FilmService} from "./services/film/film.service";
import { FilmListComponent } from './film-list/film-list.component';
import { FilmModifComponent } from './film-modif/film-modif.component';
import { FilmNewComponent } from './film-new/film-new.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {environment} from "../environments/environment";
import { KirbyComponent } from './kirby/kirby.component';
import { KirbyListComponent } from './kirby-list/kirby-list.component';
import { KirbyNewComponent } from './kirby-new/kirby-new.component';
import { KirbyModifComponent } from './kirby-modif/kirby-modif.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmListComponent,
    FilmModifComponent,
    FilmNewComponent,
    KirbyComponent,
    KirbyListComponent,
    KirbyNewComponent,
    KirbyModifComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
