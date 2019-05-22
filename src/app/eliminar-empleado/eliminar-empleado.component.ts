import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-eliminar-empleado',
  templateUrl: './eliminar-empleado.component.html',
  styleUrls: ['./eliminar-empleado.component.css']
})
export class EliminarEmpleadoComponent implements OnInit, OnChanges {

  @Input() estaActivoModal: boolean;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
  }

  delete() {
  }

  toggleModal() {
    this.estaActivoModal = !this.estaActivoModal;
  }
}
