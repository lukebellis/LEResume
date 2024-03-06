<script setup>
import { useI18n } from 'vue-i18n';
import Education from '@/components/Education.vue';
import AboutDeveloper from '@/components/AboutDeveloper.vue';
import AboutScientist from '@/components/AboutScientist.vue';
import Clients from '@/components/Clients.vue';
import { useToggleStore } from '@/stores/toggleStore'; // Adjust the import path according to your project structure

const { locale } = useI18n({ useScope: 'global' });
const toggleStore = useToggleStore();
</script>


<template>
  <article class="about active" data-page="about">

    <!-- About Component -->
    <About />

    <!-- Toggle between AboutDeveloper and AboutScientist based on toggle state -->
    <component :is="toggleStore.isDeveloperSelected ? AboutDeveloper : AboutScientist" />


    <!-- Education Component -->
    <section class="education">
      <Education />
    </section>

    <!-- Clients Component -->
    <Clients />
  </article>
</template>
