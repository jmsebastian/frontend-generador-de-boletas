import { Component, OnInit } from '@angular/core';

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

  abrirModal() {
    this.estaActivoModal = !this.estaActivoModal;
  }
}
