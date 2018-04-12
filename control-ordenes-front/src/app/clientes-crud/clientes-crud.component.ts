import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes-crud',
  templateUrl: './clientes-crud.component.html',
  styleUrls: ['./clientes-crud.component.css']
})
export class ClientesCrudComponent implements OnInit {

  data: Cliente[];
  current_cliente: Cliente;
  crud_operation = { is_new: false, is_visible: false };
  query: string = '';

  constructor(private service: ClienteService) { }

  ngOnInit() {
      //debugger;
      this.service.read(this.query).subscribe(res => {
      //debugger;
      this.data = res.json();
      this.current_cliente = new Cliente();
    });
  }


  new(){
    this.current_cliente = new Cliente();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_cliente = row;
  }


  delete(id) {
    this.service.delete(id).subscribe(res => {
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }


  save() {
    if (this.crud_operation.is_new) {
        //debugger;
        this.service.insert(this.current_cliente).subscribe(res => {
        this.current_cliente = new Cliente();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }

    this.service.update(this.current_cliente).subscribe(res => {
      this.current_cliente = new Cliente();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });
  }




}
