import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmListComponent} from "./film-list/film-list.component";
import { KirbyListComponent } from './kirby-list/kirby-list.component';
import { KirbyModifComponent } from './kirby-modif/kirby-modif.component';
import { KirbyNewComponent } from './kirby-new/kirby-new.component';

const routes: Routes = [
  {
    path:"films",
    component: FilmListComponent
  },
  {
    path:"new",
    component: KirbyNewComponent
  },
  {
    path: "modif/:id",
    component: KirbyModifComponent
  },
  {
    path: "kirby",
    component: KirbyListComponent
  }
];

@NgModule({
  declarations:[
  ],
  imports: [
    RouterModule.forRoot(routes)],
  providers: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
