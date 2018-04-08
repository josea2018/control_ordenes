import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosCrudComponent } from './usuarios-crud/usuarios-crud.component';
import { InventarioCrudComponent } from './inventario-crud/inventario-crud.component';
import { ClientesCrudComponent } from './clientes-crud/clientes-crud.component';


import { HttpModule } from '@angular/http';
import { UsuarioService } from './usuario.service';
import { InventarioService } from './inventario.service';
import { ClienteService } from './cliente.service';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UsuariosCrudComponent,
    InventarioCrudComponent,
    ClientesCrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule

  ],
  providers: [
    UsuarioService,
    InventarioService,
    ClienteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
