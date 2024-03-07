<template>
  <section class="timeline">
    <h2 class="h2 article-title">
      {{ translations.title }} &nbsp;<font-awesome-icon :icon="['fas', 'graduation-cap']"  :style="{ color: '#f39c12' }"/>
    </h2>
    <ol class="timeline-list">
      <li class="timeline-item" v-for="(degree, index) in translations.degrees" :key="index">
        <h4 class="h4 service-item-title">{{ degree.title }}</h4>
        <span>{{ degree.year }}</span>
        <p class="timeline-item-desc">{{ degree.desc }}</p>
        <!-- Conditionally render subjects if they exist and apply styles -->
        <ul v-if="degree.subjects && degree.subjects.length > 0" class="subjects-list">
          <li v-for="(subject, subjectIndex) in degree.subjects" :key="subjectIndex">
            {{ subject }}
          </li>
        </ul>
      </li>
    </ol>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { educationTranslations } from '../server/api/education'; // Adjust the path as necessary

const { locale } = useI18n({ useScope: 'global' });

const translations = computed(() => educationTranslations[locale.value]);
</script>

<style>
  .subjects-list {
    list-style-type: none;
    padding-left: 0;
    display: flex; 
    gap: 10px; 
  }
  
  .subjects-list li {
    color: #868686; 
  }
  
  .subjects-list li::before {
    content: "•";
    color: #f39c12; 
    display: inline-block;
    width: 1em;
    margin-right: 5px; 
  }
</style>
