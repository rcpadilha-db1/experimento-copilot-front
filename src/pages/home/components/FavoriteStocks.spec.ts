import {fireEvent, render} from '@testing-library/vue'
import FavoriteStocks from './FavoriteStocks.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import favoriteStocksService from '@/services/favoriteStocksService'

const vuetify = createVuetify({
  components,
  directives,
});

vi.mock("@/services/favoriteStocksService", async () => {
  return {
    default: {
      get: vi.fn().mockReturnValue([
        {
          ticker: 'TSLA',
          name: 'Tesla'
        },
        {
          ticker: 'ABCD',
          name: 'Abcd Name'
        },
      ]),
      remove: vi.fn(),
    }
  }
})

const renderScreen = () => {
  return render(FavoriteStocks, {
    global: { plugins: [vuetify] },
  });
}

describe('FavoriteStocks', () => {
  it('Should list all favorite stocks', async () => {
    const screen = renderScreen();
    await screen.findByText('Favoritos');

    expect(screen.getAllByTestId('favorite-stock').length).toBe(2);

    screen.getByText('TSLA');
    screen.getByText('Tesla');
  
    screen.getByText('ABCD');
    screen.getByText('Abcd Name');
  })
  it('Should call remove from favoriteStocksService when clicking on remove', async () => {
    const spy = vi.spyOn(favoriteStocksService, 'remove');
    const screen = renderScreen();
    await screen.findByText('Favoritos');

    const [firstStockRemoveBtn] = screen.getAllByText('Remover');
    fireEvent.click(firstStockRemoveBtn);

    expect(spy).toHaveBeenCalledWith('TSLA');
  })
});