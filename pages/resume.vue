<script setup>
import { computed } from 'vue';
import { useToggleStore } from '@/stores/toggleStore';
import { defineAsyncComponent } from 'vue';

// Dynamic imports for lazy loading (optional)
const Resumedeveloper = defineAsyncComponent(() => import('./developer/resumedeveloper.vue'));
const Resumescientist = defineAsyncComponent(() => import('./scientist/resumescientist.vue'));

const toggleStore = useToggleStore();

const currentResumeComponent = computed(() => {
  console.log(toggleStore.isDeveloperSelected ? 'Developer' : 'Scientist'); // Add this line for debugging
  return toggleStore.isDeveloperSelected ? Resumedeveloper : Resumescientist;
});

</script>


<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ toggleStore.isDeveloperSelected ? 'Developer CV' : 'Scientist CV' }}
      </h2>
    </header>

    <!-- Dynamic Component based on isDeveloperSelected -->
    <component :is="currentResumeComponent"></component>

    <!-- Education and Awards Sections remain unchanged, as they are common for both CVs -->
    ...
  </article>
</template>
