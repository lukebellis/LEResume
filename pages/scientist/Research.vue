<template>
    <article class="research active" data-page="research">
      <header>
        <h2 class="h2 article-title">{{ $t('pageTitles.research') }}</h2>
      </header>
  
      <section class="projects text-white">
        <div class="filter-list">
          <button :class="{ 'active': activeCategory === 0 }" @click="changeFilter(0)">
            All
          </button>
          <button
            v-for="category in researchCategories"
            :key="category.id"
            :class="{ 'active': activeCategory === category.id }"
            @click="changeFilter(category.id)">
            {{ locale === 'en' ? category.title.en : category.title.id_ID }}
          </button>
        </div>
  
        <ul class="project-list">
          <li
            v-for="project in filteredResearchProjects"
            :key="project.id"
            class="project-item"
            @click="showItem(project.id)">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline" />
              </div>
              <img :src="project.image" :alt="project.title" loading="lazy">
            </figure>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-category">{{ findCategoryTitle(project.categoryId) }}</p>
          </li>
        </ul>
  
        <div class="modal-container" :class="{ 'active': activeModal }">
          <div v-show="activeModal" class="overlay" @click="closeItem"></div>
          <section class="testimonials-modal block">
            <button class="modal-close-btn" @click="closeItem">
              <ion-icon name="close-outline" />
            </button>
            <div>
              <figure>
                <img :src="activeItem.image" class="rounded-lg" :alt="activeItem.title">
              </figure>
              <h4 class="h3 modal-title">{{ activeItem.title }}</h4>
              <p>{{ activeItem.description }}</p>
              <a :href="activeItem.url" target="_blank">More Info</a>
            </div>
          </section>
        </div>
      </section>
    </article>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useFetch } from '#app';
  
  const { locale } = useI18n({ useScope: 'global' });
  
  // Fetching all categories and projects data
  const { data: allCategories } = useFetch('/api/categories');
  const { data: allProjects } = useFetch('/api/projects');
  
  // State to track the active category and modal
  const activeCategory = ref(0);
  const activeModal = ref(false);
  const activeItem = ref({});
  const activeOverlay = ref(false);
  
  // Filter for chemistry-related categories and projects
  const chemistryCategoryIds = [5, 6, 7, 8]; // Example IDs for chemistry-related categories
  const researchCategories = computed(() => allCategories.value.filter(category => chemistryCategoryIds.includes(category.id)));
  const researchProjects = computed(() => allProjects.value.filter(project => chemistryCategoryIds.includes(project.category.id)));
  
  // Filtering projects based on the selected category
  const filteredResearchProjects = computed(() => {
    return activeCategory.value === 0
      ? researchProjects.value
      : researchProjects.value.filter(project => project.category.id === activeCategory.value);
  });
  
  // Change the active category
  function changeFilter(id) {
    activeCategory.value = id;
  }
  
  // Show details of a selected project
  function showItem(id) {
    const project = researchProjects.value.find(p => p.id === id);
    if (project) {
      activeItem.value = project;
      activeModal.value = true;
      activeOverlay.value = true;
    }
  }
  
  // Close the modal and reset the active item
  function closeItem() {
    activeItem.value = {};
    activeModal.value = false;
    activeOverlay.value = false;
  }
  
  // Helper to find a category's title by its ID
  function findCategoryTitle(categoryId) {
    const category = researchCategories.value.find(c => c.id === categoryId);
    return category ? category.title[locale.value] : '';
  }
  </script>
  
