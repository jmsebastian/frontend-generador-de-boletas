import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { FormEmpleadoComponent } from './form-empleado/form-empleado.component';
import { VerEmpleadosComponent } from './ver-empleados/ver-empleados.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EliminarEmpleadoComponent } from './eliminar-empleado/eliminar-empleado.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegistrarEmpleadoComponent,
    NavBarComponent,
    EditarEmpleadoComponent,
    FormEmpleadoComponent,
    VerEmpleadosComponent,
    DashboardComponent,
    EliminarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
