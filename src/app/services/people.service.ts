import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  [x: string]: any;

  constructor( private http: HttpClient) { }


  getPeoples():any {
  
    return this.http.get('https://ghibliapi.herokuapp.com/people?fields=id,name');
  }

  getPeople(id: string) {
   
    return this.http.get('https://ghibliapi.herokuapp.com/people/' + id);
  
  }

}
