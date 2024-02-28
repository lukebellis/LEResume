<script setup>
import { computed, ref } from 'vue';
import { developerResumeTranslations } from '~/assets/translations/resumedeveloper';
import ServiceSection from '@/components/ServiceSection.vue';
import { useI18n } from 'vue-i18n'; 

const { locale } = useI18n(); 
const translations = computed(() => developerResumeTranslations[locale.value] || developerResumeTranslations['en']);

const downloadPDF = () => {
  // Functionality to download PDF
};
</script>

<template>
  <section class="container">
    
    <div class="title-container">
        <h2 class="h2">{{ translations.experience }}</h2>
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
    <h2 class="h2 article-title">{{ translations.skillsTitle }}</h2>
    <ServiceSection />
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
