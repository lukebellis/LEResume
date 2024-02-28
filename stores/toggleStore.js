// stores/toggleStore.js
import { defineStore } from 'pinia';

export const useToggleStore = defineStore('toggle', {
  state: () => ({
    isDeveloperSelected: true,
  }),
  actions: {
    toggleRole() {
      console.log('Before toggle:', this.isDeveloperSelected);
      this.isDeveloperSelected = !this.isDeveloperSelected;
      console.log('After toggle:', this.isDeveloperSelected);
    }
  }
});
