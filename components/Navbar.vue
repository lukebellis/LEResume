<script setup>
import { computed } from 'vue';
import { useToggleStore } from '@/stores/toggleStore'; // Adjust the import path according to your project structure
import { useI18n } from 'vue-i18n';
import { navbarTranslations } from '../server/api/navbar'; // Import the translations file

const toggleStore = useToggleStore();
const { locale } = useI18n({ useScope: 'global' });

// Computed property to dynamically adjust titles based on the current locale
const pageTitle = computed(() => ({
  about: navbarTranslations[locale.value].pageTitles.about,
  resume: navbarTranslations[locale.value].pageTitles.resume,
  portfolio: toggleStore.isDeveloperSelected ? navbarTranslations[locale.value].pageTitles.projects : navbarTranslations[locale.value].pageTitles.research,
  blog: navbarTranslations[locale.value].pageTitles.blog,
  github: navbarTranslations[locale.value].pageTitles.github
}));
</script>



<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">
          <!-- Conditional Icon for Resume -->
          {{ pageTitle.about }} &nbsp;<font-awesome-icon :icon="toggleStore.isDeveloperSelected ? ['fas', 'code'] : ['fas', 'flask']" />
          
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/resume" class="navbar-link">
          <!-- Conditional Icon for Resume -->
          {{ pageTitle.resume }} &nbsp;<font-awesome-icon :icon="toggleStore.isDeveloperSelected ? ['fas', 'code'] : ['fas', 'flask']" />
          
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/blog" class="navbar-link">
          <!-- Conditional Icon for Blog -->
          
          {{ pageTitle.blog }} &nbsp;<font-awesome-icon :icon="toggleStore.isDeveloperSelected ? ['fas', 'code'] : ['fas', 'flask']" />
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/github" class="navbar-link">
          {{ pageTitle.github }} &nbsp;<font-awesome-icon :icon="['fab', 'github']"/>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>



<style scoped>
a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: var(--vegas-gold);
}
</style>
