<template>
  <v-container v-if="stockDetails">
    <v-row>
      <v-col cols="12">
        <div class="d-flex flex-column">
          {{ stockDetails.ticker }} - {{ stockDetails.name }}
          <span :class="{ 'day-change__positive': stockDetails.day_change >= 0 }">{{ formattedDayChange }}</span>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" align-start>
        <div class="d-flex flex-column align-center">
          <h3>{{ formatMoney(stockDetails.price) }}</h3>
          <span>Valor atual</span>
        </div>
      </v-col>
      <v-col cols="3" align-start>
        <div class="d-flex flex-column align-center">
          <h3>{{ formatMoney(stockDetails.day_high) }}</h3>
          <span>Maior valor hoje</span>
        </div>
      </v-col>
      <v-col cols="3" align-start>
        <div class="d-flex flex-column align-center">
          <h3>{{ formatMoney(stockDetails.day_low) }}</h3>
          <span>Menor valor hoje</span>
        </div>
      </v-col>
      <v-col cols="3" align-start>
        <div class="d-flex flex-column align-center">
          <h3>{{ formatMoney(stockDetails.previous_close_price) }}</h3>
          <span>Último fechamento</span>
        </div>
      </v-col>
    </v-row>
    <hr class="my-8"/>
    <div class="mb-4">No último ano</div>
    <v-row>
      <v-col cols="3" align-start>
        <div class="d-flex flex-column align-center">
          <h3>{{ formatMoney(stockDetails['52_week_high']) }}</h3>
          <span>Maior valor</span>
        </div>
      </v-col>
      <v-col cols="3" align-start>
        <div class="d-flex flex-column align-center">
          <h3>{{ formatMoney(stockDetails['52_week_low']) }}</h3>
          <span>Menor valor</span>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col cols="4">
        <v-btn v-if="!isFavorite" @click="addToFavorite">Marcar Como Favorito</v-btn>
        <v-btn v-else disabled>Favoritado!</v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn @click="router.go(-1)">Voltar</v-btn>
      </v-col>
    </v-row>
  </v-container>
  <v-skeleton-loader v-if="loading" type="article"></v-skeleton-loader>
</template>

<script lang="ts" setup>
import favoriteStocksService from '@/services/favoriteStocksService';
import stocksService from '@/services/stocksService';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const stockDetails = ref();
const savedFavorite = ref(false);
const loading = ref(false);

const formattedDayChange = computed(() => {
  const dayChange = stockDetails.value.day_change;
  const formattedDayChange = new Intl.NumberFormat('pt-BR', { style: 'percent' }).format(stockDetails.value.day_change);
  if (dayChange > 0) {
    return `+ ${formattedDayChange}`;
  }
  return dayChange < 0 ? `- ${formattedDayChange}` : formattedDayChange;
})

const isFavorite = computed(() => {
  const stockFound = favoriteStocksService.get().find(stock => stock.ticker === stockDetails.value.ticker);
  return Boolean(stockFound) || savedFavorite.value;
})

function formatMoney(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
}

function addToFavorite() {
  favoriteStocksService.add({
    ticker: stockDetails.value.ticker,
    name: stockDetails.value.name,
  });
  savedFavorite.value = true;
}

onMounted(() => {
  loading.value = true;
  stocksService.getStockDetails(route.params.symbol as string)
    .then(response => {
      [stockDetails.value] = response.data.data;
    }).finally(() => {
      console.log('teste')
      loading.value = false;
    });
})

</script>

<style lang="sass">
  .day-change
    color: red
    &__positive
      color: green
</style>