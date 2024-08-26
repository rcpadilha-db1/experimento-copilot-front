<template>
  <v-container v-if="news.length">
    <v-row>
      <v-col cols="12">
        <p>Últimas notícias</p>
      </v-col>
    </v-row>
    <v-row
      v-for="item in news"
      :key="item.uuid"
      class="px-0"
      data-testid="news-item"
    >
      <v-col cols="12">
        <div>
          <p class="text-subtitle-1 font-weight-bold">{{ item.title }}</p>
        </div>
        <div class="mb-2">
          <span>{{ formatDate(item.published_at) }}</span>
        </div>
        <div class="mb-2">
          <span>{{ item.snippet }}</span>
        </div>
        <div class="mb-8">
          <a :href="item.url">Ver notícia</a>
        </div>
        <hr v-if="item !== news.at(-1)"/>
      </v-col>
    </v-row>
  </v-container>
  <v-skeleton-loader type="paragraph" v-if="loading"></v-skeleton-loader>
</template>

<script lang="ts" setup>
import stocksService from '@/services/stocksService';
import { format } from 'date-fns/format';
import { onMounted, Ref, ref } from 'vue';

const news: Ref<any[]> = ref([]);
const loading: Ref<boolean> = ref(false);

async function retrieveNews() {
  loading.value = true;
  stocksService.getNews().then(response => {
    news.value = response.data.data;
  }).finally(() => {
    loading.value = false;
  });
}

function formatDate(date: string) {
 return format(date, "dd/MM/yyyy, HH:mm'h'");
}

onMounted(() => {
  retrieveNews();
});
</script>