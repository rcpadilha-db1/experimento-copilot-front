import axios, { AxiosInstance, AxiosResponse } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://api.stockdata.org/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

const API_TOKEN = 'UqI9xqwqVOpSz1mFrK490YrqXeqmr2wcL15aPasM';

interface Meta {
  found: number;
  returned: number;
  limit: number;
  page: number;
}

interface Highlight {
  highlight: string;
  sentiment: number;
  highlighted_in: string;
}

interface Entity {
  symbol: string;
  name: string;
  exchange: string | null;
  exchange_long: string | null;
  country: string;
  type: string;
  industry: string;
  match_score: number;
  sentiment_score: number;
  highlights: Highlight[];
}

interface Similar {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  relevance_score: number | null;
  entities: Entity[];
}

export interface NewsDataResponse {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  relevance_score: number | null;
  entities: Entity[];
  similar: Similar[];
}

export interface StocksDataResponse {
  symbol: string;
  name: string;
  type: string;
  industry: string;
  exchange: string;
  exchange_long: string;
  mic_code: string;
  country: string;
}

export interface StockSelectedDataResponse {
  ticker: string;
  name: string;
  exchange_short: any;
  exchange_long: any;
  mic_code: string;
  currency: string;
  price: number;
  day_high: number;
  day_low: number;
  day_open: number;
  _52_week_high: number;
  _52_week_low: number;
  market_cap: any;
  previous_close_price: number;
  previous_close_price_time: string;
  day_change: number;
  volume: number;
  is_extended_hours_price: boolean;
  last_trade_time: string;
}

interface ApiResponse<T> {
  meta: Meta;
  data: T[];
}

const fetchData = async <T>(endpoint: string): Promise<T[]> => {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await api.get(endpoint);
    console.log('API Response:', response.data);

    if (response.data && Array.isArray(response.data.data)) {
      return response.data.data;
    } else {
      throw new Error('Resposta da API não está no formato esperado.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const requestObtainNews = async (): Promise<NewsDataResponse[]> => {
  return fetchData<NewsDataResponse>(
    `/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=${API_TOKEN}`
  );
};

export const requestObtainStocksList = async (): Promise<StocksDataResponse[]> => {
  return fetchData<StocksDataResponse>(
    `/entity/search?search=tsla&api_token=${API_TOKEN}`
  );
};

export const requestObtainStockSelected = async (): Promise<StockSelectedDataResponse[]> => {
  return fetchData<StockSelectedDataResponse>(
    `/data/quote?symbols=AAPL,TSLA,MSFT&api_token=${API_TOKEN}`
  );
};

export default api;
