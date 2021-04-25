import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Tarea } from '../models/tarea.model';


@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {

  constructor(private readonly afs: AngularFirestore) { }

  getAll(){
    return this.afs.collection('todolist').snapshotChanges();
  }

  addTarea(payload: Tarea){
    return this.afs.collection('todolist').add(payload);
  }

  deleteTarea(id: string){
    return this.afs.doc('todolist/' + id).delete();
  }

  inProcess(id: string, process: boolean){
    if(process){
      return this.afs.doc('todolist/' + id).update({estado:1});
    } else {
      return this.afs.doc('todolist/' + id).update({estado:0});
    }
  }
}
