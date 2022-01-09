import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {environment} from "../environments/environment";
import { KirbyComponent } from './kirby/kirby.component';
import { KirbyListComponent } from './kirby-list/kirby-list.component';
import { KirbyNewComponent } from './kirby-new/kirby-new.component';
import { KirbyModifComponent } from './kirby-modif/kirby-modif.component';
import { KirbyService } from './services/kirby/kirby.service';


@NgModule({
  declarations: [
    AppComponent,
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
    KirbyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
