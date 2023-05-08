<template>
  <div id="nav">
    <router-link id="logo" to="/">Travel App </router-link>
    <router-link
      v-for="destination of destinations"
      :key="destination.id"
      :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug }}"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import dataSource from '@/data/data';

const destinations = dataSource.destinations;
</script>

<style lang="css">
  #nav .nav-active-link {
    color: white;
    font-weight: bold;
    opacity: 1;
    border-bottom: 1px solid white;
  }
</style>