export interface IStockDataSearchActionResponse {
  meta: Meta;
  data: StocksList[];
}

export interface Meta {
  found: number;
  returned: number;
  limit: number;
  page: number;
}

export interface StocksList {
  symbol: string;
  name: string;
  type: string;
  industry: any;
  exchange: any;
  exchange_long: any;
  mic_code: any;
  country: string;
}
