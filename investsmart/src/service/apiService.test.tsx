import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { requestObtainNews, ApiResponse } from './apiService';

describe('apiService', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('deve retornar os dados corretamente quando a API responder com sucesso', async () => {
    const mockResponse: ApiResponse = {
      meta: {
        found: 100,
        returned: 1,
        limit: 10,
        page: 1,
      },
      data: [
        {
          uuid: '12345',
          title: 'Sample News Title',
          description: 'Sample description',
          keywords: '',
          snippet: 'Sample snippet',
          url: 'https://example.com/news/12345',
          image_url: 'https://example.com/news/12345.jpg',
          language: 'en',
          published_at: '2024-01-01T00:00:00Z',
          source: 'example.com',
          relevance_score: null,
          entities: [],
          similar: [],
        },
      ],
    };

    mock.onGet(/\/news\/all/).reply(200, mockResponse);

    const result = await requestObtainNews();

    expect(result).toEqual(mockResponse.data);
  });

  it('deve lançar um erro quando a API retornar um erro', async () => {
    mock.onGet(/\/news\/all/).reply(500);

    await expect(requestObtainNews()).rejects.toThrow('Request failed with status code 500');
  });

  it('deve lançar um erro quando a resposta da API não estiver no formato esperado', async () => {
    const badResponse = { unexpected_key: 'unexpected_value' };
    mock.onGet(/\/news\/all/).reply(200, badResponse);

    await expect(requestObtainNews()).rejects.toThrow('Resposta da API não está no formato esperado.');
  });
});
