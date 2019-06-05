import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mostrar:boolean = false;
  error:boolean = false;
  fecha:any;
  constructor(private http:HttpClient) {}

  ngOnInit() {
  }

  generarBoletas(){
    this.http.get('http://localhost:3000/api/generador-boletas/enviar-boletas').subscribe((data:any) => {
      this.mostrar = true;
      if(data.length == 0){
        this.error = true;
      }else{
        this.error = false;
      }
    });
  }

}
