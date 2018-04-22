import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Boleta } from './boleta';

@Injectable()
export class BoletaService {

  constructor(private http: Http) { }


  read(query = '') {
    //debugger;
    return this.http.get('http://localhost:8000/ordenes', {
      params: { q: query }
    });
  }

  insert(data: Boleta) {
    return this.http.post('http://localhost:8000/ordenes', data);
  }

  update(data: Boleta) {
    return this.http.put('http://localhost:8000/ordenes/'+data.id, data);
  }

  delete(id) {
    return this.http.delete('http://localhost:8000/ordenes/'+id);
  }



}
