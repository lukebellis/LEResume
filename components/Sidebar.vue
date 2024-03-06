<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <NuxtLink to="/">
          <img src="/images/sig.png" alt="Photo" width="80" style="border-radius: 10px; box-shadow: 0 0 10px #717171;">
        </NuxtLink>
      </figure>

      <div class="info-content">
        <NuxtLink to="/">
          <h1 class="name" title="Luke Ellis MChem">
            Luke B Ellis MChem
          </h1>
        </NuxtLink>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <!-- Update the text color based on the store's selected profession -->
          <span :style="{ color: toggleStore.isDeveloperSelected ? 'inherit' : '#f39c12' }">{{ translations.analyticalChemist }}</span>
          <span :style="{ color: toggleStore.isDeveloperSelected ? '#f39c12' : 'inherit' }">{{ translations.webDeveloper }}</span>
        </p>

        <div class="toggle-container my-4">
          <!-- Remove the event handler since the store manages the state -->
          <ProfessionToggle />
        </div>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>{{ translations.showContacts }}</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <a href="https://github.com/lukebellis" class="contact-link" target="_blank">
              <ion-icon name="logo-github" />
            </a>
          </div>
          <div class="contact-info">
            <p class="contact-title">{{ translations.github }}</p>
            <a href="https://github.com/lukebellis" class="contact-link" target="_blank">lukebellis</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <a href="https://www.linkedin.com/in/lbellis1/" class="contact-link" target="_blank">
              <ion-icon name="logo-linkedin" />
            </a>
          </div>
          <div class="contact-info">
            <p class="contact-title">{{ translations.linkedin }}</p>
            <a href="https://www.linkedin.com/in/lbellis1/" class="contact-link" target="_blank">in/lbellis1</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>
          <div class="contact-info">
            <p class="contact-title">{{ translations.currentLocation }}</p>
            <address>{{ translations.location }}</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="mailto:contact@lukeellis.me" class="social-link" target="_blank">
            <ion-icon name="mail-outline" />
          </NuxtLink>
        </li>
        <!-- The LangSwitcher2 component is assumed to be part of your project -->
        <LangSwitcher2 />
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useToggleStore } from '@/stores/toggleStore'; // Import the store
import { sidebarTranslations } from '../server/api/sidebar'; // Import translations
import { useI18n } from 'vue-i18n'; // Import useI18n hook


const toggleStore = useToggleStore(); // Access the toggle store
const { locale } = useI18n({ useScope: 'global' }); // Access the global locale

let isOpen = ref(false);

// Get translations based on the current locale
const translations = computed(() => sidebarTranslations[locale.value] || sidebarTranslations['en']);
</script>

<style scoped>
/* Default styles for larger screens */

/* Styles for mobile screens */
@media (max-width: 768px) { /* Adjust the max-width value based on your design's breakpoint for mobile devices */
  .sidebar {
    position: -webkit-sticky; /* For Safari */
    position: sticky;
    top: 0; /* Adjust this value as needed */
    z-index: 1000; /* Example z-index value, adjust as necessary */
  }
}


</style>