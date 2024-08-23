<template>
  <v-container class="fill">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-app-bar :elevation="2">
        <v-app-bar-title>Stock Data Explorer</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn>
          <RouterLink to="/home">Home</RouterLink>
        </v-btn>
        <v-btn>
          <RouterLink to="/stocks">Ações</RouterLink>
        </v-btn>
      </v-app-bar>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  //
</script>
