import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class CombosService {

  constructor(private http: Http) { }

  clientesReturn(query = ''){
    //return this.http.get('http://localhost:8000/combos/clientesReturn');
    return this.http.get('http://localhost:8000/combos/clientesReturn', {params: {q:query}
    });
  }


}
