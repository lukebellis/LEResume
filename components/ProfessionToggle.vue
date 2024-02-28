<template>
  <div class="toggle-container">
    <ion-icon name="flask-outline" class="toggle-icon-left" :style="{ color: toggleStore.isDeveloperSelected ? '#ccc' : '#f39c12' }"></ion-icon>
    <div class="toggle-switch" :class="{ 'toggle--active': toggleStore.isDeveloperSelected }" @click="toggleRole">
      <div class="toggle-handle"></div>
    </div>
    <ion-icon name="code-slash-outline" class="toggle-icon-right" :style="{ color: toggleStore.isDeveloperSelected ? '#f39c12' : '#ccc' }"></ion-icon>
  </div>
</template>

<script setup>
import { useToggleStore } from '@/stores/toggleStore';

const toggleStore = useToggleStore();

function toggleRole() {
  const newRole = toggleStore.isDeveloperSelected ? 'chemist' : 'developer';
  console.log(`Toggling role to: ${newRole}`);
  toggleStore.toggleRole();

  // Scroll to the top of the page
  window.scrollTo(0, 0);
}

</script>

<style scoped>
.toggle-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Adjust the space between icons and the toggle switch */
}

.toggle-switch {
  position: relative;
  width: 50px; /* Width of the toggle switch */
  height: 24px; /* Height of the toggle switch */
  background-color: #ccc;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.toggle--active {
  background-color: #f39c12; /* Active state background color */
}

.toggle-handle {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px; /* Handle width */
  height: 20px; /* Handle height */
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.toggle--active .toggle-handle {
  transform: translateX(26px); /* Adjust based on the width of the toggle switch */
}

.toggle-icon-left, .toggle-icon-right {
  font-size: 24px; /* Icon size */
}
</style>
