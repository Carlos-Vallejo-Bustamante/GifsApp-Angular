import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUrl: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(busqueda: string): Observable<Country[]> {

    const url = `${this.baseUrl}/name/${busqueda}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });

  }

  buscarCapital(busqueda: string): Observable<Country[]> {

    const url = `${this.baseUrl}/capital/${busqueda}`

    return this.http.get<Country[]>(url, { params: this.httpParams })

  }

  buscarPaisId(busqueda: string): Observable<Country[]> {

    const url = `${this.baseUrl}/alpha/${busqueda}`

    return this.http.get<Country[]>(url)

  }

  buscarContinente(busqueda: string): Observable<Country[]> {

    const url = `${this.baseUrl}/regionalbloc/${busqueda}`

    return this.http.get<Country[]>(url, { params: this.httpParams })
      .pipe(
        tap(console.log)
      )

  }

}
