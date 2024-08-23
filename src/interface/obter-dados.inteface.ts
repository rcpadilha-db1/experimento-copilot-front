export interface Meta {
    found: number;
    returned: number;
    limit: number;
    page: number;
}

export interface CompanyData {
    symbol: string;
    name: string;
    type: string;
    industry?: string | null;
    exchange?: string | null;
    exchange_long?: string | null;
    mic_code?: string | null;
    country?: string;
}

export interface ApiResponse {
    meta: Meta;
    data: CompanyData[];
}