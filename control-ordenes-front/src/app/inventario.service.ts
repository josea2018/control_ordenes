import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Inventario } from './inventario';

@Injectable()
export class InventarioService {

  constructor(private http: Http) { }

  read(query = '') {
    return this.http.get('http://localhost:8000/inventarios', {
      params: { q: query }
    });
  }

  insert(data: Inventario) {
    return this.http.post('http://localhost:8000/inventarios', data);
  }

  update(data: Inventario) {
    return this.http.put('http://localhost:8000/inventarios/'+data.id, data);
  }

  delete(id) {
    return this.http.delete('http://localhost:8000/inventarios/'+id);
  }


}
