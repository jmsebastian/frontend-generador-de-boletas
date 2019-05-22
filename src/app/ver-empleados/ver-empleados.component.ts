import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.css']
})
export class VerEmpleadosComponent implements OnInit {

  estaActivoModal: boolean;
  constructor() { }

  ngOnInit() {
    this.estaActivoModal = false;
  }

  modificarModal() {
    this.estaActivoModal = !this.estaActivoModal;
  }
}
