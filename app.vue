<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from './composables/locale'
const { locale } = useI18n({ useScope: 'global' })
const cookieLocale = useLocaleStore()

locale.value = cookieLocale.getLocale || 'en'

const loadingPage = ref()

onBeforeMount(() => {
  loadingPage.value = false
})

onMounted(() => {
  setTimeout(() => {
    loadingPage.value = true
  }, 10000000)
})
</script>

<template>
  <!-- LoadingPage is shown based on showLoadingPage -->
  <div v-if="showLoadingPage">
    <LoadingPage />
  </div>

  <!-- Main content is shown only when showLoadingPage is false -->
  <NuxtLayout v-else>
    <NuxtPage transition />
  </NuxtLayout>
</template>


<style>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
