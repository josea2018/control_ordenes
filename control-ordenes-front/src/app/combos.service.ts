import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class CombosService {

  constructor(private http: Http) { }

  clientes(){
    return this.http.get('http://localhost:8000/combos/clientes');
  }

}
