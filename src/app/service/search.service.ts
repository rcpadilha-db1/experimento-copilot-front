import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iquote, Isearch } from '../interface/search.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  public listar(search: string): Observable<Isearch> {
    return this.http.get<Isearch>(
      'https://api.stockdata.org/v1/entity/search',
      {
        params: {
          search,
          api_token: 'VW9DicQRv7BS1FrPiCBL2iJaM57de1c42woMPRVZ',
        },
      }
    );
  }

  public localizar(symbol: string): Observable<Iquote> {
    return this.http.get<Iquote>('https://api.stockdata.org/v1/data/quote', {
      params: {
        symbols: symbol,
        api_token: 'VW9DicQRv7BS1FrPiCBL2iJaM57de1c42woMPRVZ',
      }
    })
  }
}
