import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonsApiService {

  constructor(private http: HttpClient) { }
  
  getPokemonsList(): Observable<any>{
    return this.http.get(
      'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json?rapidapi-key=19d7f85771msh205b0954ee20b54p1610dcjsna360290140be');
      }
  

  listarUsuarioPeloID(pokemon_id: number): Observable<any> {
    return this.http
      .get(
        'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json?rapidapi-key=19d7f85771msh205b0954ee20b54p1610dcjsna360290140be'
      ).pipe(map((value: any) => value[pokemon_id]));
  }
}