import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Orden } from './orden';

@Injectable()
export class OrdenService {

  constructor(private http: Http) { }


  read(query = '') {
    return this.http.get('http://localhost:8000/ordens', {
      params: { q: query }
    });
  }

  insert(data: Orden) {
    return this.http.post('http://localhost:8000/ordens', data);
  }

  update(data: Orden) {
    debugger;
    return this.http.put('http://localhost:8000/ordens/'+data.id, data);
  }


  delete(id) {
    //debugger;
    return this.http.delete('http://localhost:8000/ordens/'+id);
  }

}



