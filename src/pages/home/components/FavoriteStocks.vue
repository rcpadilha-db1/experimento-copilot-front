<template>
  <v-container v-if="favoriteStocks.length">
    <v-row>
      <v-col cols="12">
        <p>Favoritos</p>
      </v-col>
    </v-row>
    <v-row class="px-0 mb-2">
      <v-col
        v-for="item in favoriteStocks"
        :key="item.ticker"
        cols="4"
      >
      <div>
        <div class="d-flex flex-column align-start px-4 py-2 rounded-sm border-thin">
          <b>{{ item.ticker }}</b>
          <span>{{ item.name  }}</span>
        </div>
        <div class="">
          <v-btn @click="() => removeFavorite(item)">Remover</v-btn>
        </div>
      </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import favoriteStocksService, { FavoriteStock } from '@/services/favoriteStocksService';
import { ref } from 'vue'

const favoriteStocks = ref(favoriteStocksService.get() || []);

function removeFavorite(stock: FavoriteStock) {
  favoriteStocksService.remove(stock.ticker);
  favoriteStocks.value = favoriteStocksService.get();
}
</script>