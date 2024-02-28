<template>
    <section class="service">
      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>
  </template>
  
  <script setup>
  const { data: services } = await useFetch('/api/services')
  </script>
  