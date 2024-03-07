<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useFetch } from '@vueuse/core';
// Adjust the import path as per your project structure
import Introduction from '../components/Introduction.vue';

const { locale } = useI18n({ useScope: 'global' });
const aboutSections = ref([]);

onMounted(async () => {
  const { data, error } = await useFetch('/api/about').json();
  
  if (error.value) {
    console.error('Failed to fetch about sections:', error.value);
    return;
  }

  console.log('Fetched data from /api/about:', data.value); // Ensure data structure is as expected
  aboutSections.value = data.value;
});

function getDescription(section) {
  return section.description[locale.value] || 'Description not available';
}
</script>

<template>
  <section class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }} &nbsp;<font-awesome-icon :icon="['far', 'address-card']" :style="{ color: '#f39c12' }" />
      </h2>
    </header>
    <Introduction />
  </section>
</template>

<style scoped>
/* Your styles for About section here */
.about-item {
  margin-bottom: 2rem;
}
.about-image-container img {
  /* Adjust based on your design */
}
.about-text-container {
  /* Text container styling */
}
</style>
