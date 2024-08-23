<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-text-field
          class="input-field"
          label="Pesquise por nome ou símbolo"
          v-model="search"
        />
      </v-col>
      <v-col cols="2">
        <v-btn
          class="search-button"
          size="x-large"
          :disabled="!search"
          @click="retrieveStocks"
        >
          Pesquisar
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="stocks.length || loading">
      <v-col cols="12">
        <v-data-table
          :items="stocks"
          :headers="headers"
          :loading="loading"
        >
          <template v-slot:loading>
            <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
          </template>
          <template v-slot:[`item.symbol`]="{ value }">
            <RouterLink :to="`/stocks/${value}`">{{ value }}</RouterLink>
          </template>
          <template v-slot:no-data>
            <span>Nenhuma ação encontrada</span>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import stocksService from '@/services/stocksService';
import { Ref, ref } from 'vue';
import { RouterLink } from 'vue-router';

const stocks: Ref<any[]> = ref([]);
const search = ref('');
const loading = ref(false);
const headers = ref([
  { title: 'Símbolo', value: 'symbol' },
  { title: 'Nome', value: 'name' },
  { title: 'Tipo', value: 'type' }
]);

function retrieveStocks() {
  loading.value = true;
  stocksService.getStocks(search.value).then(response => {
    stocks.value = response.data.data;
  }).finally(() => {
    loading.value = false;
  })
}
</script>