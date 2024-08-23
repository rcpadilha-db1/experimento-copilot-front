import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints, environment } from '../../environments/environment';
import { IStockDataNewsResponse } from './Interfaces/news-response';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}
  getNews() {
    return this.httpClient.get<IStockDataNewsResponse>(
      environment.URL_STOCKDATA + endpoints.news,
      {
        params: {
          language: 'en',
          api_token: environment.apiToken,
        },
      }
    );
  }
}
