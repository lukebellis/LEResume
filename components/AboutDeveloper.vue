<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useFetch } from '@vueuse/core'
import { useToggleStore } from '@/stores/toggleStore';

useHead({
  title: 'About Developer',
})

const toggleStore = useToggleStore();

const { locale } = useI18n({ useScope: 'global' })
const aboutSections = ref([])

onMounted(async () => {
  const { data, error } = await useFetch('/api/about').json()
  
  if (error.value) {
    console.error('Failed to fetch about sections:', error.value)
    return
  }

  console.log('Fetched data from /api/about:', data.value) // Ensure data structure is as expected
  aboutSections.value = data.value
})

function getDescription(section) {
  return section.description[locale.value] || 'Description not available';
}
</script>

<template>
  <section class="about active" data-page="about">
    <header>
        <h2 class="h2 article-title">
          My Jouney as a Developer  &nbsp;<font-awesome-icon :icon="['fas', 'code']"  :style="{ color: '#f39c12' }"/>
        </h2>
      </header>
  
    <div class="about-text">
      <ul class="about-list">
        <li 
          v-for="section in aboutSections" 
          :key="section.id" 
          class="about-item flex flex-col md:flex-row md:items-center"
          :class="section.align === 'left' ? 'md:flex-row-reverse text-md-left' : 'text-md-right'">
          
          <div class="about-image-container md:w-1/2 flex justify-center md:justify-end p-4">
            <img :src="section.image" alt="" class="rounded-[20px] max-w-full h-auto shadow-lg">
          </div>
          <div class="about-text-container md:w-1/2 p-4">
            <p class="about-item-text text-justify md:text-left">
              {{ getDescription(section) }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* Your styles for About section here */
.about-item {
  margin-bottom: 2rem;
}
.about-image-container img {
  /* Adjust based on your design */
}
.about-text-container {
  /* Text container styling */
}
</style>
