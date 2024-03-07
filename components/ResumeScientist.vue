<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { scientistResumeTranslations } from '~/server/api/ResumeScientist.js';
import { faBriefcase, faBook, faChartBar, faStar, faHeart, faHandsHelping } from '@fortawesome/free-solid-svg-icons';


const { locale } = useI18n();
const translations = computed(() => scientistResumeTranslations[locale.value] || scientistResumeTranslations['en']);

const skillSection = ref(null);
const skillsInViewport = ref(false);

onMounted(() => {
  window.addEventListener('scroll', checkSkillsInView);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkSkillsInView);
});

function checkSkillsInView() {
  const rect = skillSection.value.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  skillsInViewport.value = rect.top < windowHeight && rect.bottom >= 0;
}
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

    <section
    class="skill"
    v-if="translations.skillsCategories"
    ref="skillSection"
  >
    <h2 class="h2 article-title">{{ translations.skillsTitle }} &nbsp;<font-awesome-icon :icon="['fas', 'atom']"  :style="{ color: '#f39c12' }"/></h2>
    <div
      v-for="(category, index) in translations.skillsCategories"
      :key="'category-' + index"
    >
      <h3 class="h3 my-8">{{ category.categoryTitle }}</h3>
      <ul class="skills-list content-card">
        <li
          v-for="(skill, skillIndex) in category.skills"
          :key="skill.name"
          class="skills-item"
        >
          <div class="skill-info">
            <div class="title-wrapper">
              <h5 class="h5">{{ skill.name }}</h5>
            </div>
            <div class="proficiency-wrapper">
              <data :value="skill.value" class="proficiency text-white">{{ skill.proficiency }}</data>
            </div>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill"
            :style="{
                    width: skillsInViewport ? skill.value + '%' : '0%',
                    transitionDelay: skillsInViewport ? (skillIndex * 0.3) + 's' : '0s'
     }"
     :class="{ 'active': skillsInViewport }"></div>

          </div>
        </li>
      </ul>
    </div>
  </section>
    

    <section class="feedback">
      <h3 class="h2 article-title text-white my-8">{{ translations.feedbackTitle }} &nbsp;<font-awesome-icon :icon="['fas', 'comment-dots']"  :style="{ color: '#f39c12' }"/></h3>
      <div class="feedback-list content-card">
        <div class="feedback-item" v-for="(feedback, index) in translations.feedback" :key="index">
          <blockquote class="text-white">{{ feedback.text }}</blockquote>
          <cite class="text-gray-400">{{ feedback.author }}</cite>
        </div>
      </div>
    </section>

    <section class="awards">
      <h2 class="h2 article-title text-white my-8">{{ translations.awardsTitle }} &nbsp;<font-awesome-icon :icon="['fas', 'award']"  :style="{ color: '#f39c12' }"/></h2>
      <div class="awards-list content-card">
        <div class="awards-item" v-for="(award, index) in translations.awards" :key="index">
          <h5 class="h5">{{ award.name }}</h5>
          <p class="text-white">{{ award.description }}</p>
          <cite class="text-gray-400">{{ award.author }}</cite>
        </div>
      </div>
    </section>

    <section class="timeline volunteering">
      <h2 class="h2 article-title text-white my-8">{{ translations.volunteeringTitle }}  &nbsp;<font-awesome-icon :icon="['fas', 'hands-helping']"  :style="{ color: '#f39c12' }"/></h2>
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

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.proficiency-wrapper {
  text-align: right;
}
.skill-progress-fill {
  transition: width 2s ease-out;
  width: 0;
}

.skill-progress-fill.active {
  width: 100%;
}
</style>