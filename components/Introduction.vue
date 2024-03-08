<template>
    <span style="display: none;">👨‍💻👨‍🔬🌱🌍👨‍🏫🏍️</span>
    <section class="introduction text-white px-8 py-32">
      <header>
        <h2 class="text-6xl font-bold mb-8">
          {{ localizedContent.welcome }} 👋 
        </h2>
        <h2 class="text-3xl font-bold mb-8">
          {{ introPhrase }}... <span class="typewriter">{{ currentTagline }}</span>
        </h2>
      </header>
      <p class="text-lg" v-html="coloredParagraph"></p>
    </section>
  </template>
  
  
  
  <script setup>
import { ref, computed, onBeforeUnmount, watch } from 'vue';
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
let isDeleting = false;
let taglineIndex = 0;
let charIndex = 0;

// Initialize a new grapheme splitter
const splitter = new GraphemeSplitter();

let typewriterInterval; // Variable to keep track of the interval

const typeWriterEffect = () => {
  const taglines = Object.values(Taglines).map(tagline => tagline[i18n.locale.value]);
  const tagline = taglines[taglineIndex % taglines.length];
  const graphemes = splitter.splitGraphemes(tagline);

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  currentTagline.value = graphemes.slice(0, charIndex).join('');

  if (!isDeleting && charIndex === graphemes.length) {
    // Pause before starting to delete
    isDeleting = true;
    setTimeout(() => { typeWriterEffect(); }, 2000);
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    taglineIndex++; // Move to the next tagline
  }

  let nextTimeout = isDeleting ? 30 : 100; // Faster deletion than typing
  setTimeout(typeWriterEffect, nextTimeout);
};

// Start the typewriter effect when the component mounts
onBeforeUnmount(() => {
  clearInterval(typewriterInterval);
});

watch(() => i18n.locale.value, () => {
  // Restart the typewriter effect by resetting the tagline index
  taglineIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typeWriterEffect(); // Restart effect on language change
});

// Initiate the typewriter effect
typeWriterEffect();
</script>


  
  
<style scoped>
@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: orange; }
}

.typewriter {
  display: inline-block;
  border-right: .25em solid orange; /* The cursor */
  white-space: nowrap;
  letter-spacing: .15em;
  animation: blink-caret .75s step-end infinite;
}

/* Add your existing styles here */
.highlight {
  color: #f39c12; 
}
</style>
  