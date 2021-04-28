import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';
import { TareaServiceService } from 'src/app/services/tarea-service.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  completadas: Tarea[];

  constructor(
    private tareasService: TareaServiceService,
  )
  {  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.tareasService.getCompleted().subscribe((res) => {
      this.completadas = res.map((tarea) => {
        return {
          ...tarea.payload.doc.data() as {},
          id: tarea.payload.doc.id
        } as Tarea;
      });
    });
  }

  eliminar(id: string){
    this.tareasService.borrarTarea(id);
  }

}
