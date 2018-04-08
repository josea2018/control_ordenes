import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cliente } from './cliente';

@Injectable()
export class ClienteService {

  constructor(private http: Http) { }


  read(query = '') {
    return this.http.get('http://localhost:8000/clientes', {
      params: { q: query }
    });
  }

  insert(data: Cliente) {
    return this.http.post('http://localhost:8000/clientes', data);
  }

  update(data: Cliente) {
    return this.http.put('http://localhost:8000/clientes/'+data.id, data);
  }

  delete(id) {
    return this.http.delete('http://localhost:8000/clientes/'+id);
  }



}
