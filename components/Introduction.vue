<template>
    <section class="introduction text-white px-8 py-32">
      <header>
        <h2 class="text-6xl font-bold mb-8">
          {{ localizedContent.welcome }} 👋 
        </h2>
        <h2 class="text-3xl font-bold mb-8">
            {{ introPhrase }}... {{ currentTagline }} 
          </h2>

      </header>
      <p class="text-lg">{{ localizedContent.paragraph }}</p>
    </section>
  </template>
  
  
  <script setup>
  import { ref, watchEffect, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useToggleStore } from '@/stores/toggleStore';
  import { IntroductionDeveloper } from '../server/api/IntroductionDeveloper';
  import { IntroductionScientist } from '../server/api/IntroductionScientist';
  import { Taglines } from '../server/api/Taglines';
  import { IntroPhrases } from '../server/api/IntroPhrases';
  
  const i18n = useI18n();
  const toggleStore = useToggleStore();
  
  // Determine which introduction content to use based on toggle state
  const introductionContent = computed(() => {
    return toggleStore.isDeveloperSelected ? IntroductionDeveloper : IntroductionScientist;
  });
  
  // Compute the localized content for the introduction
  const localizedContent = computed(() => {
    const content = introductionContent.value;
    const lang = i18n.locale.value;
    return {
      welcome: content.welcome[lang],
      paragraph: content.paragraph[lang],
    };
  });
  
  // Compute the localized "I'm a" prefix
  const introPhrase = computed(() => {
    return IntroPhrases.ImA[i18n.locale.value];
  });
  
  const currentTagline = ref('');
  const taglineIndex = ref(0);
  
  watchEffect(() => {
    const selectedTaglineKey = toggleStore.selectedTagline;
    if (selectedTaglineKey && Taglines[selectedTaglineKey]) {
      currentTagline.value = Taglines[selectedTaglineKey][i18n.locale.value];
    } else {
      currentTagline.value = ''; // Or any default value you prefer
    }
  });
  
  // Typewriter effect
  watchEffect(() => {
    const taglineKeys = Object.keys(Taglines);
    const taglineKey = taglineKeys[taglineIndex.value % taglineKeys.length];
    const taglineStr = Taglines[taglineKey][i18n.locale.value] || '';
    
    let currentCharacterIndex = 0;
    const interval = setInterval(() => {
      if (currentCharacterIndex <= taglineStr.length) {
        currentTagline.value = taglineStr.substring(0, currentCharacterIndex);
        currentCharacterIndex++;
      } else {
        clearInterval(interval);
        // Move to the next tagline after a delay
        setTimeout(() => {
          taglineIndex.value++;
        }, 2000); // Adjust the delay as needed
      }
    }, 100); // Adjust the typing speed as needed
  });
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  