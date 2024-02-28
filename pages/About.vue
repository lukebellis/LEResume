<script setup>
import { computed } from 'vue';
import { useToggleStore } from '@/stores/toggleStore';

const toggleStore = useToggleStore();
const isDeveloperSelected = computed(() => toggleStore.isDeveloperSelected);

// You can define developer and scientist specific information here
// For example:
const developerInfo = {
  title: "About the Developer",
  content: "I'm a passionate Full Stack Developer with a love for building scalable web applications and working on cutting-edge technologies."
};

const scientistInfo = {
  title: "About the Scientist",
  content: "As an analytical chemist, I've contributed to various research projects aiming to improve environmental standards and public health."
};
</script>

<template>
    <article class="about active" data-page="about">
      <header>
        <h2 class="h2 article-title">
          {{ isDeveloperSelected ? developerInfo.title : scientistInfo.title }}
        </h2>
      </header>
  
      <section class="about-content">
        <p>{{ isDeveloperSelected ? developerInfo.content : scientistInfo.content }}</p>
      </section>
    </article>
  </template>
  
  <style scoped>
  /* Add your styles here */
  .about-content p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-top: 20px;
  }
  </style>
  