import { Component, OnInit } from '@angular/core';
import { Boleta } from '../boleta';
import { BoletaService } from '../boleta.service';
import { Cliente } from '../cliente';
import { CombosService } from '../combos.service';

@Component({
  selector: 'app-boletas-crud',
  templateUrl: './boletas-crud.component.html',
  styleUrls: ['./boletas-crud.component.css']
})
export class BoletasCrudComponent implements OnInit {

  data: Boleta[];
  clientes: Cliente[];
  current_boleta: Boleta;
  crud_operation = { is_new: false, is_visible: false };
  query: string = '';

  constructor(private service: BoletaService, private combos: CombosService) { }

   ngOnInit() {
    this.service.read(this.query).subscribe(res => {
      //debugger;
      this.data = res.json();
      this.current_boleta = new Boleta();
    });
    this.combos.clientesReturn().subscribe(res => {
      this.clientes = res.json();
    });

  }


  new(){
    this.current_boleta = new Boleta();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_boleta = row;
  }


  delete(id) {
    this.service.delete(id).subscribe(res => {
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }


  save() {
    if (this.crud_operation.is_new) {
        debugger;
        this.current_boleta.nota_entregado = "-";
        this.current_boleta.fecha_entregado = "-";
        this.current_boleta.costo = 0;
        this.current_boleta.firma = "-";

        this.service.insert(this.current_boleta).subscribe(res => {
        this.current_boleta = new Boleta();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }

    this.service.update(this.current_boleta).subscribe(res => {
      this.current_boleta = new Boleta();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });
  }

}
