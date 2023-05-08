<script setup lang="ts">

const props = defineProps<{
  experience: any;
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
