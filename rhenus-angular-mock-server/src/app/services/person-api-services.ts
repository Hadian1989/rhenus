import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPerson } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PersonApiServices {
  baseUrl = '/api/people';
  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get<IPerson[]>(this.baseUrl);
  }
  getPersonDetail(userId: number) {
    return this.http.get<IPerson>(this.baseUrl.concat(`/${userId}`));
  }

  addPerson(person: IPerson) {
    return this.http.post(this.baseUrl, person);
  }
  updatePerson(userId: number, body: any) {
    return this.http.patch(this.baseUrl.concat(`/${userId}`), body);
  }
  deletePerson(userId: number) {    
    return this.http.delete(this.baseUrl.concat(`/${userId}`));
  }
}