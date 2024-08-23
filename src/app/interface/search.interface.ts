export interface Isearch {
  meta: IsearchMeta;
  data: IsearchData[];
}

export interface IsearchMeta {
  found: number;
  returned: number;
  limit: number;
  page: number;
}

export interface IsearchData {
  symbol: string;
  name: string;
  type: string;
  industry: any;
  exchange: any;
  exchange_long: any;
  mic_code: any;
  country: string;
}


export interface Iquote  {
  meta: IquoteMeta
  data: IquoteMetaData[]
}

export interface IquoteMeta {
  requested: number
  returned: number
}

export interface IquoteMetaData {
  ticker: string
  name: string
  exchange_short: any
  exchange_long: any
  mic_code: string
  currency: string
  price: number
  day_high: number
  day_low: number
  day_open: number
  "52_week_high": number
  "52_week_low": number
  market_cap: any
  previous_close_price: number
  previous_close_price_time: string
  day_change: number
  volume: number
  is_extended_hours_price: boolean
  last_trade_time: string
}
