import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { UsuariosCrudComponent } from './usuarios-crud/usuarios-crud.component';
import { InventarioCrudComponent } from './inventario-crud/inventario-crud.component';
import { ClientesCrudComponent } from './clientes-crud/clientes-crud.component';
import { OrdenesCrudComponent } from './ordenes-crud/ordenes-crud.component';
import { BoletasCrudComponent } from './boletas-crud/boletas-crud.component';


const routes: Routes = [
  { path: '', component: UsuariosCrudComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'users', component: UsuariosCrudComponent },
  { path: 'users/:id', component: UsuariosCrudComponent },
  { path: '', component: InventarioCrudComponent },
  { path: 'inventarios', component: InventarioCrudComponent },
  { path: 'inventarios/:id', component: InventarioCrudComponent },
  { path: '', component: ClientesCrudComponent },
  { path: 'clientes', component: ClientesCrudComponent },
  { path: 'clientes/:id', component: ClientesCrudComponent },
  { path: '', component: OrdenesCrudComponent },
  { path: 'ordenes', component: OrdenesCrudComponent },
  { path: 'ordenes/:id', component: OrdenesCrudComponent },
  { path: '', component: BoletasCrudComponent },
  { path: 'boletas', component: BoletasCrudComponent },
  { path: 'boletas/:id', component: BoletasCrudComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
