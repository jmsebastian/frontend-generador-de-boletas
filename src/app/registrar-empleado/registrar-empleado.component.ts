import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})

export class RegistrarEmpleadoComponent implements OnInit {

  empleado: any = {};
  nombre = '';
  apellido = '';
  dropdownTipo = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.empleado = {
      nombre: '',
      ci: 0,
      cargo: '',
      email: '',
      tipo: 'tiempo completo',
      salarioMensual: 0,
      fechaInicioTrabajo: '',
      salarioPorHora: 0,
      porcentajeComision: 0,
      sueldoBase: 0,
      sindicato: '',
      metodoDePago: 'Cheque',
      metodoDeEnvio: 'Email'
    };
  }

  registrar() {
    if (this.nombre || this.apellido) {
      this.empleado.nombre = this.nombre + ' ' + this.apellido;
    }
    this.http.post('http://localhost:3000/api/empleado/', this.empleado).subscribe((response: any) => {
      console.log(response);
      if (response.success === true) {
        alert('Empleado registrado exitosamente!');
      } else {
        alert('Error al insertar al empleado!');
      }
    });
  }

}
