<script setup lang="ts">
import Experience from '@/types/experience.type';


const props = defineProps<{
  experience: Experience;
 }>();

</script>

<template>
  <div class="card">
    <img :src="`/images/${props.experience?.image}`" />

    <p class="card__text">
      {{ props.experience?.name }}
    </p>
  </div>
</template>
