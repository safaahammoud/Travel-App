<script setup lang="ts">
import { onMounted, computed } from "vue";

import dataSource from "@/data/data";
import Experience from "@/types/experience.type";

const destinations = dataSource.destinations;

const props = defineProps<{
  id: string;
  experienceSlug: string;
}>();

const destination = computed(() => {
  return destinations.find((destination) => destination.id === Number(props.id));
});
const experience = computed(() => {
  return destination?.value?.experiences.find(
    (experience: Experience) => experience.slug === props.experienceSlug
  );
});

onMounted(async () => {});
</script>

<template>
  <section v-if="experience" class="experience">
    <h2>
      {{ experience?.name }}
    </h2>

    <div class="experience-details">
      <img :src="`/images/${experience?.image}`" />

      <p>
        {{ experience?.description }}
      </p>
    </div>
  </section>
</template>
