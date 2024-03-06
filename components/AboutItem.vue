x<script setup>
import { defineProps, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  section: Object
})
const { locale } = useI18n({ useScope: 'global' })

// Optional: Computed property for cleaner template syntax
const description = computed(() => props.section.description[locale.value])

onMounted(() => {
  console.log("Received section prop:", props.section);
});

watch(description, (newVal) => {
  console.log("Computed description:", newVal);
});
</script>


<template>
  <li class="about-item flex flex-col md:flex-row md:items-center" :class="props.section.align === 'left' ? 'md:flex-row-reverse text-md-left' : 'text-md-right'">
    <div class="about-image-container md:w-1/2 flex justify-center md:justify-end p-4">
      <img :src="props.section.image" alt="" class="rounded-[20px] max-w-full h-auto shadow-lg">
    </div>
    <div class="about-text-container md:w-1/2 p-4">
      <p class="about-item-text text-justify md:text-left">
        {{ description }}
      </p>
      
    </div>
  </li>
</template>

<style scoped>
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
