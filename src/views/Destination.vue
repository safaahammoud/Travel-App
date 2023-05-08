<script setup lang="ts">
import { onMounted, ref } from "vue";

import ExperienceCard from '@/components/ExperienceCard.vue';
import Destination from '@/types/destination.type';
 
let destination = ref<Destination | null>(null);

const props = withDefaults(
 defineProps<{
  slug: string;
 }>(),
 {slug: ''},
);

onMounted(async () => {
  const response = await fetch(
    `https://travel-dummy-api.netlify.app/${props.slug}.json`
  );

  destination.value = await response.json();
});
</script>

<template>
  <section
    v-if="destination"
    class="destination"
  > 
    <h2>
      {{ destination?.name }}
    </h2>

    <div class="destination-details">
      <img :src="`/images/${destination?.image}`" />

      <p>
        {{ destination?.description }}
      </p>
    </div>
  </section>

  <section>
    <h2>
      Top  Experiences in {{ destination?.name }}
    </h2>
    
    <div class="experiences">
      <div class="cards">
        <router-link
          v-for="experience of destination?.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience',
            params: {
              experienceSlug: experience?.slug,
            }
          }"
        >
          <ExperienceCard :experience="experience"/>
        </router-link>
      </div>
      
      <router-view />
    </div>
  </section>
</template>
