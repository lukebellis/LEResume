<script setup>
// Adjust the import path as per your project structure
import Introduction from '../components/Introduction.vue';
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
