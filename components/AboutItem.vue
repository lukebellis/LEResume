<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '../composables/locale'
import { Icon } from '@iconify/vue';

const props = defineProps({
  about: Object,
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <ul class="about-list">
    <li v-for="(section, index) in aboutSections" :key="section.id" class="about-item flex flex-col md:flex-row md:items-center" :class="section.align === 'left' ? 'md:flex-row-reverse' : ''">
      <div class="about-image-container md:w-1/2">
        <img :src="section.image" alt="" class="rounded-[20px] w-full h-auto">
      </div>
      <div class="about-text-container md:w-1/2 p-4">
        <p class="about-item-text">
          {{ section.description }}
        </p>
      </div>
    </li>
  </ul>
</template>

