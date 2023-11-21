import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { catchError } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class  CountriesService{

  private apiUrl: string= 'https://restcountries.com/v3.1'
  constructor(private http: HttpClient) { }
    searchCapital( term: string): Observable<Country[]>{

const url=`${this.apiUrl}/capital/${term}`;
      return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => ([]))
        // tap(countries => console.log('tap1', countries)),
        // //map transforma la informacion
        // map( countries => []),
        // tap(countries => console.log('tap2', countries)),

        );
    }
    searchCountry(term: string): Observable<Country[]>{

      const url=`${this.apiUrl}/name/${term}`;
      return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => ([])) );
    }
    searchRegion(region: string): Observable<Country[]>{
      const url=`${this.apiUrl}/region/${region}`;
      return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => ([])) );
    }


}
