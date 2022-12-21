import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = '0jwstaV43B08o0aQcdT52m1FXspVbIf0';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) { }

  buscarGifs(query: string) {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {

      this._historial.unshift(query);

      this._historial = this._historial.slice(0, 10);
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=0jwstaV43B08o0aQcdT52m1FXspVbIf0&q=${query}&limit=10`)
      .subscribe((res: any) => {
        this.resultados = res.data
        console.log(this.resultados);
      })

  }

}
