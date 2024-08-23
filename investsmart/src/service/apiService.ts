import axios, { AxiosInstance, AxiosResponse } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://api.stockdata.org/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

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

export interface Data {
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

export interface ApiResponse {
    meta: Meta;
    data: Data[];
}

export const requestObtainNews = async (): Promise<Data[]> => {
    try {
        const api_token = 'UqI9xqwqVOpSz1mFrK490YrqXeqmr2wcL15aPasM';
        const response: AxiosResponse<ApiResponse> = await api.get(`/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=${api_token}`);

        console.log('API Response:', response.data); // Log da resposta completa

        // Verifique se a resposta possui a estrutura esperada
        if (response.data && Array.isArray(response.data.data)) {
            return response.data.data; // Retorna o array de notícias
        } else {
            throw new Error('Resposta da API não está no formato esperado.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default api;
