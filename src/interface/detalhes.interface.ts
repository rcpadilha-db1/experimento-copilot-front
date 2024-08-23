export interface Meta {
    requested: number;
    returned: number;
}

export interface CompanyDetails {
    ticker: string;
    name: string;
    exchange_short?: string | null;
    exchange_long?: string | null;
    mic_code?: string;
    currency?: string;
    price: number;
    day_high: number;
    day_low: number;
    day_open?: number;
    '52_week_high': number;
    '52_week_low': number;
    market_cap?: number | null;
    previous_close_price: number;
    previous_close_price_time?: string;
    day_change: number;
    volume?: number;
    is_extended_hours_price?: boolean;
    last_trade_time?: string;
}

export interface DetalhesResponse {
    meta: Meta;
    data: CompanyDetails[];
}