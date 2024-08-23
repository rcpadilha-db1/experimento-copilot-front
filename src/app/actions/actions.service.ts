import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints, environment } from '../../environments/environment';
import { IStockDataSearchActionResponse } from './interfaces/search-action';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActionsService {
  constructor(private httpClient: HttpClient) {}

  searchActions(action: string) {
    return this.httpClient.get<IStockDataSearchActionResponse>(
      environment.URL_STOCKDATA + endpoints.searchActions,
      {
        params: {
          search: action,
          api_token: environment.apiToken,
        },
      }
    );
  }
}
