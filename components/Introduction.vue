<template>
    <!-- Preload emojis -->
  <span style="display: none;">👨‍💻👨‍🔬🌱🌍👨‍🏫🏍️</span>

    <section class="introduction text-white px-8 py-32">
      <header>
        <h2 class="text-6xl font-bold mb-8">
          {{ localizedContent.welcome }} 👋 
        </h2>
        <h2 class=" text-3xl font-bold mb-8">
            {{ introPhrase }}... {{ currentTagline }} 
          </h2>

      </header>
      <p class="text-lg" v-html="coloredParagraph"></p>
    </section>
  </template>
  
  
  <script setup>
import { ref, watchEffect, computed, onBeforeUnmount, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useToggleStore } from '@/stores/toggleStore';
import { IntroductionDeveloper } from '../server/api/IntroductionDeveloper';
import { IntroductionScientist } from '../server/api/IntroductionScientist';
import { Taglines } from '../server/api/Taglines';
import { IntroPhrases } from '../server/api/IntroPhrases';
import GraphemeSplitter from 'grapheme-splitter';

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

const coloredParagraph = computed(() => {
  let paragraph = localizedContent.value.paragraph;

  // Define replacements for different languages
  const replacements = {
    "toggle button": {
      en: "toggle button",
      es: "botón de cambio",
      de: "Umschaltknopf",
      pt: "botão de alternância"
    },
    "web developer": {
      en: "web developer",
      es: "desarrollador web",
      de: "Webentwickler",
      pt: "desenvolvedor web"
    },
    "scientist": {
      en: "scientist",
      es: "científico",
      de: "Wissenschaftler",
      pt: "cientista"
    }
  };

  // Loop through each replacement and apply it to the paragraph for the current language
  Object.keys(replacements).forEach(term => {
    const translatedTerm = replacements[term][i18n.locale.value];
    if (translatedTerm) {
      paragraph = paragraph.replace(new RegExp(translatedTerm, 'g'), `<span style="color: #f39c12; display: inline; font-weight: bold;">${translatedTerm}</span>`);
    }
  });

  return paragraph;
});




// Compute the localized "I'm a" prefix
const introPhrase = computed(() => {
  return IntroPhrases.ImA[i18n.locale.value];
});

const currentTagline = ref('');
const taglineIndex = ref(0);

// Initialize a new grapheme splitter
const splitter = new GraphemeSplitter();

let typewriterInterval = null; // Variable to keep track of the interval

// Clear the interval when the component is unmounted to prevent memory leaks
onBeforeUnmount(() => {
  clearInterval(typewriterInterval);
});

// Watch for changes in the language and restart the typewriter effect accordingly
watch(() => i18n.locale.value, () => {
  // Restart the typewriter effect by resetting the tagline index
  taglineIndex.value = 0;
});

watchEffect(() => {
  // Clear any existing interval to prevent stuttering
  clearInterval(typewriterInterval);

  const taglineKeys = Object.keys(Taglines);
  const taglineKey = taglineKeys[taglineIndex.value % taglineKeys.length];
  const taglineStr = Taglines[taglineKey][i18n.locale.value] || '';

  // Use the grapheme splitter to split the string into graphemes
  const graphemes = splitter.splitGraphemes(taglineStr);

  let currentCharacterIndex = 0;
  typewriterInterval = setInterval(() => {
    if (currentCharacterIndex <= graphemes.length) {
      // Join the graphemes up to the current index to get the current string
      currentTagline.value = graphemes.slice(0, currentCharacterIndex).join('');
      currentCharacterIndex++;
    } else {
      clearInterval(typewriterInterval);
      // Move to the next tagline after a delay
      setTimeout(() => {
        taglineIndex.value++;
      }, 2000); // Adjust the delay as needed
    }
  }, 100); // Adjust the typing speed as needed
});
</script>

  
  
  <style scoped>

.highlight {
    color: #f39c12; 
  }
  
  </style>
  