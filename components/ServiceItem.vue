<template>
  <li class="service-item">
    <div class="service-icon-box">
      <img v-if="service.image !== null && service.icon !== ''" :src="service.image" alt="service icon" class="w-40">
      <Icon v-else :icon="service.icon" class="text-ranko-500 text-[3rem] mx-auto" style="width: 40px" />
    </div>

    <div class="service-content-box">
      <h4 class="h4 service-item-title">
        {{ service.title }}
      </h4>
      <!-- Dynamically render service description based on the current locale -->
      <p class="service-item-text">
        {{ serviceDescription }}
      </p>
    </div>
  </li>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Icon } from '@iconify/vue';

const props = defineProps({
  service: Object,
});

const { locale } = useI18n({ useScope: 'global' });

// Computed property to dynamically access the correct language description
const serviceDescription = computed(() => {
  // Handling different data structures and ensuring reactivity to locale changes
  const description = props.service.description[locale.value] || props.service.description.en;
  
  // If description is an array (to handle different formats), join it. Otherwise, return as is.
  return Array.isArray(description) ? description.join(' ') : description;
});
</script>


<style scoped>
/* Add your CSS styling here */
.service-item {
  /* Your service item styles */
}

.service-icon-box {
  /* Your service icon box styles */
}

.service-content-box {
  /* Your service content box styles */
}
</style>
