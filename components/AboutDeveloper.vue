<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useFetch } from '@vueuse/core';

const { locale } = useI18n({ useScope: 'global' });
const aboutSections = ref([]);
const title = ref({}); 

onMounted(async () => {
  const { data, error } = await useFetch('/api/aboutDeveloper').json();

  if (error.value) {
    console.error('Failed to fetch about sections:', error.value);
    return;
  }

  if (data.value) {
    aboutSections.value = data.value.sections;
    title.value = data.value.title; 
  }
});
</script>

<template>
  <section class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ title[locale] }} &nbsp;<font-awesome-icon :icon="['fas', 'code']" :style="{ color: '#f39c12' }"/>
      </h2>
    </header>

    <div class="about-text">
      <ul class="about-list">
        <li v-for="section in aboutSections" :key="section.id" class="text-base about-item flex flex-col md:flex-row md:items-center"
            :class="section.align === 'left' ? 'md:flex-row-reverse text-md-left' : 'text-md-right'">
          <div class="about-image-container md:w-1/2 flex flex-col justify-center md:justify-end items-center p-4 gap-16">
            <img :src="section.image" alt="" class="rounded-[20px] max-w-full h-auto shadow-lg">
            <template v-if="section.extraImages">
              <img v-for="(extraImg, index) in section.extraImages" :key="`extraImg-${section.id}-${index}`" :src="extraImg" alt="" class="rounded-[20px] max-w-full h-auto shadow-lg hidden md:block">
            </template>
          </div>
          <div class="about-text-container md:w-1/2 p-4 flex flex-col justify-center">
            <h3 class="text-3xl font-bold mb-8">{{ section.heading[locale] }}</h3>
            <template v-if="Array.isArray(section.description[locale])">
              <p v-for="(paragraph, index) in section.description[locale]" :key="index" class="text-white text-base text-justify md:text-left">
                {{ paragraph }}
              </p>
            </template>
            <template v-else>
              <p class="text-lg text-white about-item-text text-justify md:text-left">
                {{ section.description[locale] || 'Description not available' }}
              </p>
            </template>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>


<style scoped>
.about-item {
  margin-bottom: 2rem;
}

.about-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  padding: 4rem 0; 
}

.about-image-container img {
  max-width: 100%; 
  height: auto; 
  object-fit: contain; 
}

.about-text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; 
}

@media (max-width: 768px) {
  .about-image-container, .about-text-container {
    padding: 1rem 0; 
  }

  .about-image-container {
    justify-content: center;
    align-items: center; 
  }
}
</style>