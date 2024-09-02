import axios from 'axios';
import { requestObtainNews, requestObtainStocksList, requestObtainStockSelected } from './apiService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch news data successfully', async () => {
    const mockNewsData = [
      {
        uuid: '1',
        title: 'Test News',
        description: 'This is a test news',
        keywords: 'test, news',
        snippet: 'Test news snippet',
        url: 'https://example.com/news/1',
        image_url: 'https://example.com/image.jpg',
        language: 'en',
        published_at: '2024-09-01T00:00:00Z',
        source: 'Example Source',
        relevance_score: 10,
        entities: [],
        similar: [],
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({
      data: {
        meta: { found: 1, returned: 1, limit: 10, page: 1 },
        data: mockNewsData,
      },
    });

    const data = await requestObtainNews();

    expect(data).toEqual(mockNewsData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      '/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=UqI9xqwqVOpSz1mFrK490YrqXeqmr2wcL15aPasM'
    );
  });

  it('should fetch stocks list successfully', async () => {
    const mockStocksData = [
      {
        symbol: 'TSLA',
        name: 'Tesla, Inc.',
        type: 'Equity',
        industry: 'Automotive',
        exchange: 'NASDAQ',
        exchange_long: 'NASDAQ Stock Exchange',
        mic_code: 'XNAS',
        country: 'US',
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({
      data: {
        meta: { found: 1, returned: 1, limit: 10, page: 1 },
        data: mockStocksData,
      },
    });

    const data = await requestObtainStocksList();

    expect(data).toEqual(mockStocksData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      '/entity/search?search=tsla&api_token=UqI9xqwqVOpSz1mFrK490YrqXeqmr2wcL15aPasM'
    );
  });

  it('should fetch selected stock data successfully', async () => {
    const mockStockSelectedData = [
      {
        ticker: 'AAPL',
        name: 'Apple Inc.',
        exchange_short: 'NASDAQ',
        exchange_long: 'NASDAQ Stock Exchange',
        mic_code: 'XNAS',
        currency: 'USD',
        price: 150,
        day_high: 151,
        day_low: 148,
        day_open: 149,
        _52_week_high: 180,
        _52_week_low: 120,
        market_cap: 2500000000,
        previous_close_price: 149,
        previous_close_price_time: '2024-09-01T00:00:00Z',
        day_change: 1,
        volume: 1000000,
        is_extended_hours_price: false,
        last_trade_time: '2024-09-01T00:00:00Z',
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({
      data: {
        meta: { found: 1, returned: 1, limit: 10, page: 1 },
        data: mockStockSelectedData,
      },
    });

    const data = await requestObtainStockSelected();

    expect(data).toEqual(mockStockSelectedData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      '/data/quote?symbols=AAPL,TSLA,MSFT&api_token=UqI9xqwqVOpSz1mFrK490YrqXeqmr2wcL15aPasM'
    );
  });

  it('should handle API errors gracefully', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));

    await expect(requestObtainNews()).rejects.toThrow('API Error');
    await expect(requestObtainStocksList()).rejects.toThrow('API Error');
    await expect(requestObtainStockSelected()).rejects.toThrow('API Error');
  });
});
