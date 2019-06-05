import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  error:boolean = false;
  fecha:any;
  constructor(private http:HttpClient) {}

  ngOnInit() {
  }

  generarBoletas(){
    console.log("boletas generadas");
    console.log(this.fecha);
    // this.http.get('http://localhost:3000/api/generador-boletas/enviar-boletas').subscribe((data:any) => {
    //   console.log(data);
    // });
  }

}
