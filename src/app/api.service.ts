import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCountryData(countryName:string) {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${countryName}`);
  }
  
}
