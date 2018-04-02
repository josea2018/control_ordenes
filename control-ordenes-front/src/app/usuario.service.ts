import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

  constructor(private http: Http) { }

  read(query = '') {
    return this.http.get('http://localhost:8000/usuarios', {
      params: { q: query }
    });
  }


}
