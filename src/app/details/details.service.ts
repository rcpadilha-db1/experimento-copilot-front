import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStockDataStocksInfosResponse } from './interfaces/stocks-infos';
import { endpoints, environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private httpClient: HttpClient) {}

  getStocksPrices(symbols: string) {
    return this.httpClient.get<IStockDataStocksInfosResponse>(
      environment.URL_STOCKDATA + endpoints.stockPrices,
      {
        params: {
          symbols,
          api_token: environment.apiToken,
        },
      }
    );
  }
}
