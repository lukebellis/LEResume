<script setup>
import { computed, ref } from 'vue';
import { useToggleStore } from '@/stores/toggleStore';
import { defineAsyncComponent } from 'vue';
import { resumeTranslations } from '../server/api/resume'; // Ensure correct path

// Dynamic imports for lazy loading
const Resumedeveloper = defineAsyncComponent(() => import('./developer/resumedeveloper.vue'));
const Resumescientist = defineAsyncComponent(() => import('./scientist/resumescientist.vue'));

const toggleStore = useToggleStore();

// Placeholder for a method to get the current locale dynamically
// Replace this with your actual logic (e.g., from a global state, URL parameter)
const getCurrentLocale = () => {
  // This should return the current locale, e.g., 'en', 'es', etc.
  return 'en'; // Example: dynamically determine this value
};

const locale = ref(getCurrentLocale()); // Use a reactive ref if the locale can change

// Reactive translations based on the current locale
const translations = computed(() => resumeTranslations[locale.value] || resumeTranslations['en']);

const currentResumeComponent = computed(() => {
  return toggleStore.isDeveloperSelected ? Resumedeveloper : Resumescientist;
});
</script>


<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ toggleStore.isDeveloperSelected ? translations.developerCV : translations.scientistCV }} &nbsp;<font-awesome-icon :icon="toggleStore.isDeveloperSelected ? ['fas', 'code'] : ['fas', 'flask']" :style="{ color: '#f39c12' }" />
      </h2>
    </header>

    <!-- Dynamic Component based on isDeveloperSelected -->
    <component :is="currentResumeComponent"></component>

    <!-- Education and Awards Sections remain unchanged, as they are common for both CVs -->
    ...
  </article>
</template>
