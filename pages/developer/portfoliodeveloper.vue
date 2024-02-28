<script setup>
import { ref, computed } from 'vue';
import { useFetch } from '#imports';

const { data: categories, pending: categoriesPending, error: categoriesError } = useFetch('/api/categories');
const { data: projects, pending: projectsPending, error: projectsError } = useFetch('/api/projects');
const isDeveloperSelected = ref(true);

// Log fetched data and any potential errors
console.log('Categories:', categories.value);
console.log('Projects:', projects.value);
console.log('Categories Error:', categoriesError.value);
console.log('Projects Error:', projectsError.value);

const filteredItems = computed(() => {
  if (!projects.value || !categories.value) return [];
  
  console.log('Projects and categories are loaded');

  const stateFilter = isDeveloperSelected.value ? 'developer' : 'scientist';
  console.log('Filtering for state:', stateFilter);

  const filtered = projects.value.filter(project => {
    const matchesState = project.state === stateFilter;
    const categoryExists = categories.value.some(category => category.id === project.categoryId);
    console.log('Project', project.id, 'Matches state:', matchesState, 'Category exists:', categoryExists);
    return matchesState && categoryExists;
  });

  console.log('Filtered Projects:', filtered);
  return filtered;
});
</script>



<template>
  <article class="portfolio active" data-page="portfolio">
    <header>
      <h2 class="h2 article-title text-white">
        {{ isDeveloperSelected ? 'Developer Projects' : 'Scientist Research' }}
      </h2>
      
    </header>

    <section class="projects">
      <div class="flexbox-grid">
        <div v-for="item in filteredItems" :key="item.id" class="card">
          <img :src="item.image" :alt="item.title" class="card-image text-white">
          <div class="card-content text-white">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.flexbox-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 0 1 calc(33.333% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.card-content {
  padding: 10px;
}
</style>

