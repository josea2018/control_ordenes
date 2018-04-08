import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

  constructor(private http: Http) { }

  read(query = '') {
    return this.http.get('http://localhost:8000/users', {
      params: { q: query }
    });
  }

  insert(data: Usuario) {
    return this.http.post('http://localhost:8000/users', data);
  }

  update(data: Usuario) {
    return this.http.put('http://localhost:8000/users/'+data.id, data);
  }

  delete(id) {
    return this.http.delete('http://localhost:8000/users/'+id);
  }





}
