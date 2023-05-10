<script setup lang="ts">
import dataSource from '@/data/data';

const destinations = dataSource.destinations;
</script>

<template>
  <div class="home">
    <h1>
      All Destinations
    </h1>
    
    <div class="destinations">
      <router-link
        v-for="destination of destinations"
        :key="destination.id"
        :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug }}"
      >
        <h2>
          {{ destination.name }}
        </h2>

        <img :src="`/images/${destination.image}`" />
      </router-link>
    </div>

  </div>
</template>