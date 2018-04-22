import { Component, OnInit } from '@angular/core';
import { Inventario } from '../inventario';
import { InventarioService } from '../inventario.service';

@Component({
  selector: 'app-inventario-crud',
  templateUrl: './inventario-crud.component.html',
  styleUrls: ['./inventario-crud.component.css']
})
export class InventarioCrudComponent implements OnInit {

  data: Inventario[];
  current_inventario: Inventario;
  crud_operation = { is_new: false, is_visible: false };
  query: string = '';

  constructor(private service: InventarioService) { }

  ngOnInit() {
      this.service.read(this.query).subscribe(res => {
      //debugger;
      this.data = res.json();
      this.current_inventario = new Inventario();
    });
  }

  new(){
    this.current_inventario = new Inventario();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_inventario = row;
  }


  delete(id) {
    this.service.delete(id).subscribe(res => {
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }


  save() {
    debugger;
    if (this.crud_operation.is_new) {
        //debugger;
        this.service.insert(this.current_inventario).subscribe(res => {
        this.current_inventario = new Inventario();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }

    this.service.update(this.current_inventario).subscribe(res => {
      this.current_inventario = new Inventario();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });
  }



}
