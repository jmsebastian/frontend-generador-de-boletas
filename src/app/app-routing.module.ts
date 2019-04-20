import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component'

const routes: Routes = [
  { path: '', redirectTo: '/registrar-empleado', pathMatch: 'full' },
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
