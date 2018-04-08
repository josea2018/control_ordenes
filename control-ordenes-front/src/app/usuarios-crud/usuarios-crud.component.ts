import { Component, OnInit } from '@angular/core';
import { Usuario} from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-usuarios-crud',
  templateUrl: './usuarios-crud.component.html',
  styleUrls: ['./usuarios-crud.component.css']
})
export class UsuariosCrudComponent implements OnInit {

  data: Usuario[];
  current_usuario: Usuario;
  crud_operation = { is_new: false, is_visible: false };
  query: string = '';

  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.service.read(this.query).subscribe(res => {
      //debugger;
      this.data = res.json();
      this.current_usuario = new Usuario();
    });
  }

  new(){
    this.current_usuario = new Usuario();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_usuario = row;
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
        this.current_usuario.password = Md5.hashStr(this.current_usuario.password);
        this.current_usuario.type = "reg";
        this.current_usuario.status = 1;
        this.service.insert(this.current_usuario).subscribe(res => {
        this.current_usuario = new Usuario();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }
      this.service.update(this.current_usuario).subscribe(res => {
      this.current_usuario = new Usuario();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });

  }


}
