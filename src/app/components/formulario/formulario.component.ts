import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TareaServiceService } from 'src/app/services/tarea-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private tareasService: TareaServiceService) { 
    this.formulario = new FormGroup({
      titulo: new FormControl('',[
        Validators.required,
        Validators.maxLength(15)
      ]),
      descripcion: new FormControl(),
      prioridad: new FormControl(),
      estado: new FormControl(),
      fecha: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.formulario.valid){
      this.formulario.value.estado = 0;
      this.formulario.value.fecha = Date.now();
      this.tareasService.addTarea(this.formulario.value);
      this.formulario.reset();
    }
  }

}
