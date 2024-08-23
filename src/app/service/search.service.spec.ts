import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchService } from './search.service';
import { Iquote, Isearch } from '../interface/search.interface';

describe('SearchService', () => {
  let service: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });
    service = TestBed.inject(SearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call listar and return an Observable<Isearch>', () => {
    const dummySearch: Isearch = {
      meta: {
        found: 2,
        returned: 2,
        limit: 10,
        page: 1
      },
      data: [
        {
          symbol: 'AAPL',
          name: 'Apple Inc.',
          type: 'Equity',
          industry: 'Technology',
          exchange: 'NASDAQ',
          exchange_long: 'NASDAQ Stock Exchange',
          mic_code: 'XNAS',
          country: 'USA'
        },
        {
          symbol: 'GOOGL',
          name: 'Alphabet Inc.',
          type: 'Equity',
          industry: 'Technology',
          exchange: 'NASDAQ',
          exchange_long: 'NASDAQ Stock Exchange',
          mic_code: 'XNAS',
          country: 'USA'
        }
      ]
    };
    const searchQuery = 'test';

    service.listar(searchQuery).subscribe(data => {
      expect(data).toEqual(dummySearch);
    });

    const req = httpMock.expectOne(`https://api.stockdata.org/v1/entity/search?search=${searchQuery}&api_token=VW9DicQRv7BS1FrPiCBL2iJaM57de1c42woMPRVZ`);
    expect(req.request.method).toBe('GET');
    req.flush(dummySearch);
  });

  it('should call localizar and return an Observable<Iquote>', () => {
    const dummyQuote: Iquote = {
      meta: {
        requested: 1,
        returned: 1
      },
      data: [
        {
          ticker: 'AAPL',
          name: 'Apple Inc.',
          exchange_short: 'NASDAQ',
          exchange_long: 'NASDAQ Stock Exchange',
          mic_code: 'XNAS',
          currency: 'USD',
          price: 150.00,
          day_high: 155.00,
          day_low: 148.00,
          day_open: 149.00,
          "52_week_high": 200.00,
          "52_week_low": 100.00,
          market_cap: '2T',
          previous_close_price: 148.50,
          previous_close_price_time: '2023-10-01T16:00:00Z',
          day_change: 1.50,
          volume: 1000000,
          is_extended_hours_price: false,
          last_trade_time: '2023-10-02T16:00:00Z'
        }
      ]
    };
    const symbol = 'AAPL';

    service.localizar(symbol).subscribe(data => {
      expect(data).toEqual(dummyQuote);
    });

    const req = httpMock.expectOne(`https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=VW9DicQRv7BS1FrPiCBL2iJaM57de1c42woMPRVZ`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyQuote);
  });
});