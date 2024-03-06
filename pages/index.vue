<script setup>
import { useI18n } from 'vue-i18n'
import Education from '@/components/Education.vue'
import About from '@/components/About.vue' // Make sure this import points correctly to your About component
import Clients from '@/components/Clients.vue'

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <article class="about active" data-page="about">

    <!-- About Component -->
    <About />

    <!-- Education Component -->
    <section class="education">
      <Education />
    </section>

    <!-- Clients Component -->
    <Clients />
  </article>
</template>
