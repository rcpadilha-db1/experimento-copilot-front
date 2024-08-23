export interface IStockDataNewsResponse {
  meta: Meta;
  data: NewsList[];
}

export interface Meta {
  found: number;
  returned: number;
  limit: number;
  page: number;
}

export interface NewsList {
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
  relevance_score: any;
  entities: Entity[];
  similar: Similar[];
}

export interface Entity {
  symbol: string;
  name: string;
  exchange: any;
  exchange_long: any;
  country: string;
  type: string;
  industry: string;
  match_score: number;
  sentiment_score: number;
  highlights: Highlight[];
}

export interface Highlight {
  highlight: string;
  sentiment: number;
  highlighted_in: string;
}

export interface Similar {
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
  relevance_score: any;
  entities: Entity2[];
}

export interface Entity2 {
  symbol: string;
  name: string;
  exchange: any;
  exchange_long: any;
  country: string;
  type: string;
  industry: string;
  match_score: number;
  sentiment_score: number;
  highlights: Highlight2[];
}

export interface Highlight2 {
  highlight: string;
  sentiment: number;
  highlighted_in: string;
}
