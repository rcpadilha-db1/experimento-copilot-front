export interface IAcao {
  symbol: string;
  name: string;
  type: string;
  ticker: string;
  day_change: number;
  price: number;
  day_high: number;
  day_low: number;
  previous_close_price: number;
  '52_week_low': number;
  '52_week_high': number;
}
