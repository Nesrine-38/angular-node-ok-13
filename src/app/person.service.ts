import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './entities';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }

  fetchAll() {
    return this.http.get<Person[]>(environment.serverUrl+'/api/person');
  }
  add(person:Person) {
    return this.http.post<Person>(environment.serverUrl+'/api/person', person);
  }
  delete(person:Person) {
    return this.http.delete<void>(environment.serverUrl+'/api/person/'+person._id);
  }
}
