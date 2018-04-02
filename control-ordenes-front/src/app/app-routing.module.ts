import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { UsuariosCrudComponent } from './usuarios-crud/usuarios-crud.component';

const routes: Routes = [
  { path: '', component: UsuariosCrudComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'usuarios', component: UsuariosCrudComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
