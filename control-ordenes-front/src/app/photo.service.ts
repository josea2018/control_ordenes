import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Photo } from './photo';

@Injectable()
export class PhotoService {

  constructor(private http: Http) { }

  read(query = '') {
    //debugger;
    return this.http.get('http://localhost:8000/photos', {
      params: { q: query }
    });
  }

  insert(data: Photo) {
    debugger;
    return this.http.post('http://localhost:8000/photos', data);
  }



}
