<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { scientistResumeTranslations } from '@/assets/translations/ResumeScientist.js';

const { locale } = useI18n();
const translations = computed(() => scientistResumeTranslations[locale.value] || scientistResumeTranslations['en']);
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

  <section class="skill">
    <h3 class="article-title text-white">{{ translations.skillsTitle }}</h3>
    <ul class="skills-list content-card">
      <li v-for="skill in translations.skills" :key="skill.name" class="skills-item">
        <div class="title-wrapper">
          <h5 class="h5">{{ skill.name }}</h5>
          <data :value="skill.value">{{ skill.proficiency }}</data>
        </div>
        <div class="skill-progress-bg">
          <div class="skill-progress-fill" :style="{ width: skill.value + '%' }" />
        </div>
      </li>
    </ul>
  </section>

  <section class="feedback">
    <h3 class="article-title text-white my-8">{{ translations.feedbackTitle }}</h3>
    <div class="feedback-list content-card">
      <div class="feedback-item" v-for="(feedback, index) in translations.feedback" :key="index">
        <blockquote class="text-white">{{ feedback.text }}</blockquote>
        <cite class="text-gray-400">{{ feedback.author }}</cite>
      </div>
    </div>
  </section>

  <section class="awards">
    <h3 class="article-title text-white my-8">{{ translations.awardsTitle }}</h3>
    <div class="awards-list content-card">
      <div class="awards-item" v-for="(award, index) in translations.awards" :key="index">
        <h5 class="h5">{{ award.name }}</h5>
        <p class="text-white">{{ award.description }}</p>
        <cite class="text-gray-400">{{ award.author }}</cite>
      </div>
    </div>
  </section>

  <section class="timeline volunteering">
    <h2 class="text-white">{{ translations.volunteeringTitle }}</h2>
    <ol class="timeline-list">
      <li class="timeline-item" v-for="(event, index) in translations.volunteeringEvents" :key="index">
        <h4 class="h4 timeline-item-title">{{ event.title }}</h4>
        <span>{{ event.period }}</span>
        <p class="timeline-item-desc">{{ event.location }}</p>
        <p class="timeline-text">{{ event.description }}</p>
      </li>
    </ol>
  </section>
</template>

<style scoped>
  /* Add your scoped styles here */
</style>
