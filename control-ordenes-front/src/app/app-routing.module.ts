import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { UsuariosCrudComponent } from './usuarios-crud/usuarios-crud.component';
import { InventarioCrudComponent } from './inventario-crud/inventario-crud.component';

const routes: Routes = [
  { path: '', component: UsuariosCrudComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'users', component: UsuariosCrudComponent },
  { path: 'users/:id', component: UsuariosCrudComponent },
  { path: '', component: InventarioCrudComponent },
  { path: 'inventarios', component: InventarioCrudComponent },
  { path: 'inventarios/:id', component: InventarioCrudComponent }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
