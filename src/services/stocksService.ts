import { HttpService } from './httpService';

class StocksService extends HttpService {
  constructor() {
    // super(process.env.VITE_STOCKS_BASE_URL!);
    super('https://api.stockdata.org/v1');
  }

  getNews() {
    return this.get('/news/all', {
      language: 'en',
    });
  }

  getStocks(search: string) {
    return this.get('/entity/search', {
      search,
    });
  }

  getStockDetails(symbol: string) {
    return this.get('/data/quote', {
      symbols: symbol,
    });
  }

}

export default new StocksService();