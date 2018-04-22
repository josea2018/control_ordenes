import { Component, OnInit } from '@angular/core';
import { Orden } from '../orden';
import { Cliente } from '../cliente';
import { Condition } from '../condition';
import { Photo } from '../photo';
import { OrdenService } from '../orden.service';
import { CombosService } from '../combos.service';
import { PhotoService } from '../photo.service';


@Component({
  selector: 'app-ordenes-crud',
  templateUrl: './ordenes-crud.component.html',
  styleUrls: ['./ordenes-crud.component.css']
})
export class OrdenesCrudComponent implements OnInit {

  data: Orden[];
  clientes: Cliente[];
  conditions: Condition[];
  photos: Photo[];
  current_orden: Orden;
  crud_operation = { is_new: false, is_visible: false };
  query: string = '';
  queryPhotos: string = '';

  constructor(private service: OrdenService, private combos: CombosService, private photoService: PhotoService) { }

  ngOnInit() {
    this.service.read(this.query).subscribe(res => {
      //debugger;
      this.data = res.json();
      this.current_orden = new Orden();
    });
    this.combos.clientesReturn().subscribe(res => {
      this.clientes = res.json();
    });
    this.combos.conditionsReturn().subscribe(res => {
      this.conditions = res.json();
    });

  }


  new(){
    this.current_orden = new Orden();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_orden = row;
    if(this.current_orden != null)
    {
      this.photoService.read(this.current_orden.id.toString()).subscribe(res => {
        //debugger;
        this.photos = res.json();
      });
    }

  }


  delete(id) {
    this.service.delete(id).subscribe(res => {
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }


  save() {

    if (this.crud_operation.is_new) {

    /*
             id: number;
      nota_recibido: string;
      fecha_recibido: string;
      nota_entregado: string;
      fecha_entregado: string;
      estado: string;
      cedula_cliente: string;
      costo: number;
      firma: string;*/
        this.current_orden.nota_entregado = "-";
        this.current_orden.fecha_entregado = "-";
        this.current_orden.costo = 0;
        this.current_orden.firma = "-";

        this.service.insert(this.current_orden).subscribe(res => {
        this.current_orden = new Orden();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }
    debugger;
      this.service.update(this.current_orden).subscribe(res => {
      this.current_orden = new Orden();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });
  }



}

