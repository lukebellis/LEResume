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
  <li class="about-item">
    <div class="about-content-box">
      <p class="about-item-text">
        {{ about.description[locale] }}
      </p>
    </div>
  </li>
</template>
