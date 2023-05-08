<script setup lang="ts">
import TheNavigation from '@/components/TheNavigation.vue';

</script>

<template>
  <div class="container">
    <TheNavigation />

    <router-view :key="$route.path"></router-view>
  </div>

</template>
