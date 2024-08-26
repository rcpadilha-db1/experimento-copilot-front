import {render, within} from '@testing-library/vue'
import LatestNews from './LatestNews.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
});

vi.mock("@/services/stocksService", async () => {
  return {
    default: {
      getNews: vi.fn().mockResolvedValue({
        data: {
          data: [
            {
              "uuid": "36d4ba57-fca4-4cbc-b8db-59d0290e7b09",
              "title": "Dow Jones Touches Record Highs, Helped By These Economic Data Surprises",
              "description": "Dow Jones stocks were flat on economic data as an inflation report looms. Shares of Google broke out, while Apple is in a buy zone.",
              "keywords": "",
              "snippet": "The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...",
              "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-flat-after-economic-data-magnificent-seven-stock-googl-breaks-out-to-new-high-apple-in-buy-zone/",
              "image_url": "https://www.investors.com/wp-content/uploads/2018/12/stock-Google-13-shutter.jpg",
              "language": "en",
              "published_at": "2023-12-20T17:20:19.000000Z",
              "source": "investors.com",
              "relevance_score": null,
            },
            {
              "uuid": "1d751e37-32de-4867-8327-1154878551ee",
              "title": "Seven tech stocks that can broaden your exposure beyond the “Magnificent Seven”",
              "description": "During the bull market of 2023, the \"Magnificent Seven\" stocks have dominated financial media coverage, and rightly so, but investors might want to gain...",
              "keywords": "article_normal, Computers/Consumer Electronics, Software, Applications Software, Wholesalers, Retail/Wholesale, Motor Vehicle Dealing, Specialty Retailing, Computer Services, Market Research/Public Relations, Public Relations, Rating Agencies, Internet Search Engines, Real Estate Services/Transactions, Health Care, Advertising/Marketing/Public Relations, Business/Consumer Services, Building Materials/Products, Commercial/Industrial Real Estate, Computing, Real Estate/Construction, Data Services, Financial Services, Financial Technology, Online Service Providers, Medical Software, Healthcare Information Technologies, Real Estate, Retail, Specialized Consumer Services, Technology, Analyst Comment/Recommendation, Corporate Funding, Corporate Debt Instruments, Corporate Credit Ratings, Research/Development, Information Technology, Marketing, Corporate Actions, Corporate/Industrial News, Markets/Marketing, Market Research, Political/General News, Personal Finance, Real Estate/Property, Real Estate Listings, Equity Markets, Commodity/Financial Market News, Content Types, Commentary/Opinion, Factiva Filters, C&E Exclusion Filter, C&E Executive News Filter, C&E Industry News Filter, IWE Filter, Routine General News, Verisk Analytics Inc., VRSK, CoStar Group Inc., CSGP, Equifax Inc., EFX, IQVIA Holdings Inc., IQV, Zillow Group Inc. Cl C, Z, SPDR S&P 500 ETF Trust, SPY, Buffalo Mid Cap Fund;Invest, BUFMX, analyst comment, recommendation, corporate funding, corporate debt instruments, corporate credit ratings, research, development, information technology, marketing, corporate actions, corporate, industrial news, markets, market research, political, general news, personal finance, real estate, property, real estate listings, equity markets, commodity, financial market news, content types, commentary, opinion, factiva filters, c&e exclusion filter, c&e executive news filter, c&e industry news filter, iwe filter, routine general news, computers, consumer electronics, software, applications software, wholesalers, retail, wholesale, motor vehicle dealing, specialty retailing, computer services, public relations, rating agencies, internet search engines, real estate services, transactions, health care, advertising, business, consumer services, building materials, products, commercial, industrial real estate, computing, construction, data services, financial services, financial technology, online service providers, medical software, healthcare information technologies, specialized consumer services, technology",
              "snippet": "During the bull market of 2023, the “Magnificent Seven” stocks have dominated financial media coverage, and rightly so. There is no question that this group...",
              "url": "https://www.marketwatch.com/story/seven-tech-stocks-that-can-broaden-your-exposure-beyond-the-magnificent-seven-05f198d2?mod=mw_rss_topstories",
              "image_url": "https://images.mktw.net/im-15783720/social",
              "language": "en",
              "published_at": "2023-12-20T17:11:00.000000Z",
              "source": "marketwatch.com",
              "relevance_score": null,
            }
          ],
        },
      }),
    }
  }
})

const renderScreen = () => {
  return render(LatestNews, {
    global: { plugins: [vuetify] },
  });
}

describe('LatestNews', () => {
  it('Should show title, published date and snippet from all news', async () => {
    const screen = renderScreen();
    await screen.findByText('Últimas notícias');
    const [firstNews, secondNews] = screen.getAllByTestId('news-item');

    within(firstNews).getByText('Dow Jones Touches Record Highs, Helped By These Economic Data Surprises');
    within(firstNews).getByText('20/12/2023, 14:20h');
    within(firstNews).getByText('The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...');

    within(secondNews).getByText('Seven tech stocks that can broaden your exposure beyond the “Magnificent Seven”');
    within(secondNews).getByText('20/12/2023, 14:11h');
    within(secondNews).getByText('During the bull market of 2023, the “Magnificent Seven” stocks have dominated financial media coverage, and rightly so. There is no question that this group...');
  })
});