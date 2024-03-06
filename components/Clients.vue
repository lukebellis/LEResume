<template>
    <section class="clients">
      <h3 class="h3 clients-title">
        Employers
      </h3>
      <ul class="clients-list has-scrollbar" ref="clientsList">
        <li class="clients-item" v-for="client in clients" :key="client.name">
          <a :href="client.url" target="_blank" rel="noopener noreferrer">
            <img :src="client.logo" :alt="client.name" class="client-logo rounded-[20px]">
          </a>
        </li>
      </ul>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const clientsList = ref(null)
const clients = ref([
  { name: 'GSL Media Ltd', url: 'https://www.gslmedia.co.uk/', logo: '/images/employers/GSL.jpeg' },
  { name: 'South West Water', url: 'https://www.southwestwater.co.uk/', logo: '/images/employers/southwestwater.png' },
  { name: 'Environment Agency', url: 'https://www.gov.uk/government/organisations/environment-agency', logo: '/images/employers/EnvironmentAgency.png' },
  { name: 'National Laboratory Service', url: 'https://nationallaboratoryservices.com/', logo: '/images/employers/NLS.jpeg' },
  { name: 'Royal Society of Chemistry', url: 'https://www.bradford.ac.uk/external/', logo: '/images/employers/RSC.png' },
  { name: 'Clockwork Creative Technology', url: 'https://clockworkct.co.uk/', logo: '/images/employers/Clockwork.jpeg' },
  { name: 'STEM Learning', url: 'https://www.stem.org.uk/stem-ambassadors/', logo: '/images/employers/STEM.jpg' },
  { name: 'University of Bradford', url: 'https://www.bradford.ac.uk/external/', logo: '/images/employers/bradford.jpeg' },
  { name: 'Mad Science North England', url: 'https://northengland.madscience.org/', logo: '/images/employers/MadScience.jpg' }
  // Add more clients as needed
])

const handleWheel = (event) => {
  if (clientsList.value) {
    // Prevent page from scrolling
    event.preventDefault();
    clientsList.value.scrollLeft += event.deltaY;
  }
}

onMounted(() => {
  if (clientsList.value) {
    clientsList.value.addEventListener('wheel', handleWheel, { passive: false })
  }
})

onUnmounted(() => {
  if (clientsList.value) {
    clientsList.value.removeEventListener('wheel', handleWheel)
  }
})
</script>
