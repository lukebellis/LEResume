<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'
import Education from '@/components/Education.vue'

const { locale } = useI18n({ useScope: 'global' })

// Using a different name for fetched about sections to avoid conflict
const aboutSections = ref([])

onMounted(async () => {
  const response = await axios.get('/api/about')
  aboutSections.value = response.data
})
</script>



<template>
  <ul class="about-list">
    <li v-for="(section, index) in aboutSections" :key="section.id" class="about-item flex flex-col md:flex-row md:items-center" :class="section.align === 'left' ? 'md:flex-row-reverse text-md-left' : 'text-md-right'">
      <div class="about-image-container md:w-1/2 flex justify-center md:justify-end p-4">
        <img :src="section.image" alt="" class="rounded-[20px] max-w-full h-auto shadow-lg">
      </div>
      <div class="about-text-container md:w-1/2 p-4">
        <p class="about-item-text text-justify md:text-left">
          {{ section.description[locale] }}
        </p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.about-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
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
