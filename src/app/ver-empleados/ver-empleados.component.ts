import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.css']
})
export class VerEmpleadosComponent implements OnInit {

  estaActivoModal: boolean;
  empleados:any = []

  constructor( private http:HttpClient) { 
    
    this.http.get('http://localhost:3000/api/empleado/obtener-todos').subscribe((data:any) => {
      console.log(data);
      this.empleados = data.content;
    })
  }

  ngOnInit() {
    this.estaActivoModal = false;
  
  }

  modificarModal() {
    this.estaActivoModal = !this.estaActivoModal;
  }
}
