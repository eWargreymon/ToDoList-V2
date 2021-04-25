import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';
import { TareaServiceService } from 'src/app/services/tarea-service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  tareas: Tarea[];

  order: number;

  constructor(private tareasService: TareaServiceService) { 
    this.tareas = [];
    this.order = 0;
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.tareasService.getAll().subscribe((res) => {
      this.tareas = res.map((tarea) => {
        return {
          ...tarea.payload.doc.data() as {},
          id: tarea.payload.doc.id
        } as Tarea;
      });
    });
  }

  ordenar(estilo: number){
    if(estilo===0){
      this.tareas.sort((a,b) =>
        a.titulo.localeCompare(b.titulo)
      );
    }else if(estilo===1){
      this.tareas.sort((a,b) => 
        (a.fecha > b.fecha) ? 1 : -1
      );
    } else {
      this.tareas.sort((a,b) => 
        (a.prioridad < b.prioridad) ? 1 : -1
      );
    }
  }


  eliminar(id: string){
    this.tareasService.deleteTarea(id);
  }

  proceso(tarea: Tarea){
    if(tarea.estado===0){
      this.tareasService.inProcess(tarea.id,true);
    } else {
      this.tareasService.inProcess(tarea.id,false);
    }
  }
}
