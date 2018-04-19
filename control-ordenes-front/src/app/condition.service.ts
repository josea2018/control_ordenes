import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Condition } from './condition';

@Injectable()
export class ConditionService {

  constructor(private http: Http) { }

  read(query = '') {
    //debugger;
    return this.http.get('http://localhost:8000/conditions', {
      params: { q: query }
    });
  }

  insert(data: Condition) {
    return this.http.post('http://localhost:8000/conditions', data);
  }


}
