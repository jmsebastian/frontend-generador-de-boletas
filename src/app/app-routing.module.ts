import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { VerEmpleadosComponent } from './ver-empleados/ver-empleados.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/empleados', pathMatch: 'full' },
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent },
  { path: 'editar-empleado', component: EditarEmpleadoComponent },
  { path: 'empleados', component: VerEmpleadosComponent },
  { path: 'generar-boletas',component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
