<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '../composables/locale'

const { locale } = useI18n({ useScope: 'global' })
const cookieLocale = useLocaleStore()

// Languages and their corresponding flags
const languages = [
  { code: 'en', flag: '/flags/en.png' },
  { code: 'es', flag: '/flags/es.png' },
  { code: 'de', flag: '/flags/de.png' },
  { code: 'pt', flag: '/flags/pt.png' }
]

function changeLang(langCode) {
  locale.value = langCode
  cookieLocale.setLocale(langCode)
  localStorage.setItem('locale', langCode)
}

onMounted(() => {
  // Ensure the default language is set to English if not already set
  if (!languages.some(lang => lang.code === locale.value)) {
    changeLang('en')
  }
})
</script>

<template>
  <div class="flags-container">
    <div v-for="lang in languages" :key="lang.code" class="flag-item" @click="changeLang(lang.code)">
      <img :src="lang.flag" :alt="`${lang.code} flag`" class="flag-image">
    </div>
  </div>
</template>

<style scoped>
.flags-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
}

.flag-item {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.flag-item:hover {
  transform: scale(1.1);
}

.flag-image {
  height: 30px; /* Adjust the size as needed */
}
</style>
