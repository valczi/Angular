import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Kirby } from 'src/app/models/kirby';
@Injectable({
  providedIn: 'root'
})
export class KirbyService {

  private dbPath = 'kirby';
  kirbyRef: AngularFirestoreCollection<Kirby>;


  constructor(
    private db: AngularFirestore
  ) {
    this.kirbyRef = db.collection(this.dbPath);
  }

  getAllKirbys(): any {
    return this.kirbyRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          console.log({id:doc.payload.doc.id});
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewKirby(kirby: Kirby): any {
    return new Observable(obs => {
      this.kirbyRef.add({...kirby}).then(() => {
        obs.next();
      })
    })
  }


  get(id: any): any {
    return new Observable(obs => {
      this.kirbyRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(kirby: Kirby) {
    return new Observable(obs => {
      this.kirbyRef.doc(kirby.id).update(kirby);
      obs.next();
    });
  }

  delete(id:any) {
    this.db.doc(`kirby/${id}`).delete();
  }

}