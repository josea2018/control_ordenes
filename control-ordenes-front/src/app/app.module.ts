import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosCrudComponent } from './usuarios-crud/usuarios-crud.component';
import { InventarioCrudComponent } from './inventario-crud/inventario-crud.component';
import { ClientesCrudComponent } from './clientes-crud/clientes-crud.component';
import { OrdenesCrudComponent } from './ordenes-crud/ordenes-crud.component';
import { ConditionsCrudComponent } from './conditions-crud/conditions-crud.component';


import { HttpModule } from '@angular/http';
import { UsuarioService } from './usuario.service';
import { InventarioService } from './inventario.service';
import { ClienteService } from './cliente.service';
import { OrdenService } from './orden.service';
import { CombosService } from './combos.service';
import { BoletaService } from './boleta.service';
import { ConditionService } from './condition.service';
import { PhotoService } from './photo.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoletasCrudComponent } from './boletas-crud/boletas-crud.component';
import { SignaturePadModule } from 'angular2-signaturepad';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UsuariosCrudComponent,
    InventarioCrudComponent,
    ClientesCrudComponent,
    OrdenesCrudComponent,
    BoletasCrudComponent,
    ConditionsCrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot(),
    SignaturePadModule,

  ],
  providers: [
    UsuarioService,
    InventarioService,
    ClienteService,
    OrdenService,
    CombosService,
    BoletaService,
    ConditionService,
    PhotoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
