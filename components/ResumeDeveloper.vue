<script setup>
import { computed, ref } from 'vue';
// Ensure the correct path based on your project setup
import { developerResumeTranslations } from '~/assets/translations/resumedeveloper';
import ServiceSection from '@/components/ServiceSection.vue';
import { useI18n } from 'vue-i18n'; // Import useI18n hook

const { locale } = useI18n(); // Access the locale from Vue I18n

const translations = computed(() => developerResumeTranslations[locale.value] || developerResumeTranslations['en']);
</script>

<template>
  <section class="timeline">
    <h2 class="text-white">{{ translations.experience }}</h2>
    <ol class="timeline-list">
      <li class="timeline-item" v-for="(job, index) in translations.jobs" :key="index">
        <h4 class="h4 timeline-item-title">
          {{ job.company }}
        </h4>
        <span>{{ job.period }}</span>
        <p class="timeline-item-desc">
          {{ job.location }}
        </p>
        <p class="timeline-text">
          {{ job.role }}
        </p>
        <ul class="text-white">
          <li v-for="(responsibility, index) in job.responsibilities" :key="index">
            {{ responsibility }}
          </li>
        </ul>
      </li>
    </ol>
  </section>

  <section>
    <h2 class="h2 article-title">
      {{ translations.skillsTitle }}
    </h2>
    <ServiceSection />
  </section>
</template>
