export type FavoriteStock = {
  ticker: string;
  name: string;
};

class FavoriteStocks {
  private key = 'fav-stock';

  get(): FavoriteStock[] {
    try {
      const favorites = localStorage.getItem(this.key);
      if (!favorites) return [];
      return JSON.parse(favorites);
    } catch {
      return [];
    }
  }

  add(stock: FavoriteStock) {
    try {
      const favorites = this.get();
      const favoritesSet = new Set(favorites);
      favoritesSet.add(stock);
      const favoritesArray = Array.from(favoritesSet);
      localStorage.setItem(this.key, JSON.stringify(favoritesArray));
    } catch {
      return;
    }
  }
  
  remove(ticker: string) {
    try {
      const favorites = this.get();
      const newArray = favorites.filter(item => item.ticker !== ticker);
      localStorage.setItem(this.key, JSON.stringify(newArray));
    } catch {
      return;
    }
  }
}

export default new FavoriteStocks();