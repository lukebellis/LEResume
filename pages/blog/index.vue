<script setup>
import { defineAsyncComponent, computed } from 'vue';
import { useToggleStore } from '@/stores/toggleStore';

// Dynamic imports for your blog components
const BlogDeveloper = defineAsyncComponent(() => import('@/components/BlogDeveloper.vue'));
const BlogScientist = defineAsyncComponent(() => import('@/components/BlogScientist.vue'));

const toggleStore = useToggleStore();

// Computed property to determine which component to display
const currentBlogComponent = computed(() => {
  return toggleStore.isDeveloperSelected ? BlogDeveloper : BlogScientist;
});
</script>

<template>
  <div>
    <div class="toggle-container">
      <!-- Your toggle-switch code here -->
    </div>
    <!-- Dynamic Component based on toggleStore.isDeveloperSelected -->
    <component :is="currentBlogComponent"></component>
  </div>
</template>
