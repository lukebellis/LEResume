<script setup>
import { computed, ref } from 'vue';
import { developerResumeTranslations } from '~/server/api/ResumeDeveloper.js';
import ServiceSection from '@/components/ServiceSection.vue';
import Education from '@/components/Education.vue';
import { useI18n } from 'vue-i18n';



const { locale } = useI18n(); 
const translations = computed(() => developerResumeTranslations[locale.value] || developerResumeTranslations['en']);
const certifications = computed(() => {
  console.log(translations.value.certifications); // Debugging the output
  return translations.value.certifications;
});


const downloadPDF = () => {
  // Functionality to download PDF
};

</script>

<template>
  <section class="container">
    
    <div class="title-container">
      <h2 class="h2 text-white">
        {{ translations.experience }} &nbsp;<font-awesome-icon :icon="['fas', 'briefcase']"  :style="{ color: '#f39c12' }"/>
        </h2>
      <div class="download-button-container">
        <button class="download-button flex items-center justify-center" @click="downloadPDF">
          <span class="mr-2">Download PDF</span>
          <font-awesome-icon :icon="['fas', 'download']" />
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

    <!-- Certification  -->

    <section class="certifications  py-8">
      <h2 class="text-2xl font-bold text-white mb-8 flex items-center justify-start">
        Certifications
        <font-awesome-icon :icon="['fas', 'certificate']" class="ml-2 text-yellow-500"/>
      </h2>
      <div class="certifications-list ">
        <div class="certification-item service-item rounded-lg shadow-md p-4 flex mb-4" v-for="(certification, index) in certifications" :key="index">
          <!-- Icon container -->
          <div class="icon-container flex-shrink-0 mr-4">
            <font-awesome-icon :icon="['fab', certification.icon]"  :style="{ color: '#f39c12' }"/>
          </div>
          <!-- Content container -->
          <div class="content-container flex-grow">
            <h5 class="h4 service-item-title">{{ certification.name }}</h5>
            <p class="service-item-text">{{ certification.description }}</p>
            <a :href="certification.url" target="_blank" class="text-blue-500 hover:text-blue-700">
              View Certification
            </a>
            <cite class="block text-gray-400">{{ certification.author }}</cite>
          </div>
        </div>
      </div>
    </section>
    
    
     <!-- Certification End -->
    
    <h2 class="h2 article-title">{{ translations.skillsTitle }} &nbsp;<font-awesome-icon :icon="['fas', 'laptop-code']"  :style="{ color: '#f39c12' }"/></h2>
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
</style>server/api/Resumedeveloper.js
