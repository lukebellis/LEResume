<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { scientistResumeTranslations } from '~/server/api/ResumeScientist.js';

const { locale } = useI18n();
const translations = computed(() => scientistResumeTranslations[locale.value] || scientistResumeTranslations['en']);
</script>

<template>
  <section class="container">
    <div class="title-container">
        <h2 class="h2 text-white">{{ translations.experience }}</h2>
      <div class="download-button-container">
        <button class="download-button" @click="downloadPDF">
          <span>Download PDF</span>
          <i class="fas fa-download"></i>
        </button>
      </div>
    </div>

    <section class="timeline">
      
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
    
    <Education />

    <section class="skill" v-if="translations.skillsCategories">
      <h2 class="h2 article-title">{{ translations.skillsTitle }}</h2>
      <div v-for="(category, index) in translations.skillsCategories" :key="'category-' + index">
        <h3 class="h3 my-4">{{ category.categoryTitle }}</h3>
        <ul class="skills-list content-card">
          <li v-for="skill in category.skills" :key="skill.name" class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">{{ skill.name }}</h5>
              <data :value="skill.value">{{ skill.proficiency }}</data>
            </div>
            <div class="skill-progress-bg">
              <div class="skill-progress-fill" :style="{ width: skill.value + '%' }"></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    

    <section class="feedback">
      <h3 class="h2 article-title text-white my-8">{{ translations.feedbackTitle }}</h3>
      <div class="feedback-list content-card">
        <div class="feedback-item" v-for="(feedback, index) in translations.feedback" :key="index">
          <blockquote class="text-white">{{ feedback.text }}</blockquote>
          <cite class="text-gray-400">{{ feedback.author }}</cite>
        </div>
      </div>
    </section>

    <section class="awards">
      <h3 class="h2 article-title text-white my-8">{{ translations.awardsTitle }}</h3>
      <div class="awards-list content-card">
        <div class="awards-item" v-for="(award, index) in translations.awards" :key="index">
          <h5 class="h5">{{ award.name }}</h5>
          <p class="text-white">{{ award.description }}</p>
          <cite class="text-gray-400">{{ award.author }}</cite>
        </div>
      </div>
    </section>

    <section class="timeline volunteering">
      <h2 class="h2 article-title text-white my-8">{{ translations.volunteeringTitle }}</h2>
      <ol class="timeline-list">
        <li class="timeline-item" v-for="(event, index) in translations.volunteeringEvents" :key="index">
          <h4 class="h4 timeline-item-title">{{ event.title }}</h4>
          <span>{{ event.period }}</span>
          <p class="timeline-item-desc">{{ event.location }}</p>
          <p class="timeline-text">{{ event.description }}</p>
        </li>
      </ol>
    </section>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.title-container {
  display: flex;
  align-items: baseline; /* Align items to the baseline */
}

.download-button-container {
  margin-left: auto; /* Push the download button to the right */
  margin-bottom: 10px; /* Adjust spacing as needed */
}

.download-button {
  background-color: #f39c12;
  color: #383838;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.download-button:hover {
  background-color: #121212; /* Updated hover background color */
  color: #DB8E14; /* Updated hover text color */
  box-shadow: 0 0 10px #DB8E14; /* Box shadow with color #DB8E14 */
}

  

.download-button span {
  margin-right: 5px;
}
</style>