<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';
import Education from '@/components/Education.vue';


useHead({
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Testimonials */
const { data: testimonials } = await useFetch('/api/testimonials')

const testimonialItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showTestimonial(id) {
  testimonialItem.value = testimonials.value.find(item => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeTestimonaial() {
  testimonialItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}
/* Testimonials */

/* Services */
const { data: services } = await useFetch('/api/services')

/* Services */
const { data: about } = await useFetch('/api/about')
onMounted(async () => {
  console.log(about); // Check for uniqueness of each "about" section
})

</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text">
      <ul class="about-list">
        <AboutItem v-for="about in about" :key="about.id" :about="about" />
      </ul>
    </section>

    <!-- Education -->
    <section class="education">
    <Education />
  </section>


  

    <div class="modal-container" :class="{ active: activeModal }">
      <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" />

      <section class="testimonials-modal">
        <button class="modal-close-btn" @click="closeTestimonaial">
          <ion-icon name="close-outline" />
        </button>

        <div class="flex gap-5 mb-5 justify-start items-center">
          <div class="modal-avatar-box">
            <img :src="testimonialItem.image" alt="Daniel lewis" width="80">
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title">
              {{ testimonialItem.title }}
            </h4>
            <time datetime="2021-06-14">14 June, 2021</time>
          </div>
        </div>

        <div class="flex gap-5 items-start">
          <img class="my-auto hidden md:block" src="/images/icon-quote.svg" alt="quote icon">
          <p class="text-justify text-gray-400 text-sm md:text-md" v-html="locale === 'en' ? testimonialItem.content?.en : testimonialItem.content?.id_ID" />
        </div>
        <div class="mt-2 flex justify-end text-sm text-gray-600 italic">
          Company Co.
        </div>
      </section>
    </div>

    <!-- clients -->

    <section class="clients">
      <h3 class="h3 clients-title">
        Employers
      </h3>

      <ul class="clients-list has-scrollbar">
        <li class="clients-item">
          <a href="https://www.gslmedia.co.uk/" target="_blank">
            <img src="/images/employers/GSL.jpeg" alt="GSL Media Ltd" class="rounded-[20px]">
          </a>
        </li>
        <li class="clients-item">
          <a href="https://www.southwestwater.co.uk/" target="_blank">
            <img src="/images/employers/southwestwater.png" alt="South West Water" class="rounded-[20px]">
          </a>
        </li>
        <li class="clients-item">
          <a href="https://www.gov.uk/government/organisations/environment-agency" target="_blank">
            <img src="/images/employers/EnvironmentAgency.png" alt="Environment Agency" class="rounded-[20px]">
          </a>
        </li>
        <li class="clients-item">
          <a href="https://nationallaboratoryservices.com/" target="_blank">
            <img src="/images/employers/NLS.jpeg" alt="National Laboratory Service" class="rounded-[20px]">
          </a>
        </li>
        <li class="clients-item">
          <a href="https://www.bradford.ac.uk/external/" target="_blank">
            <img src="/images/employers/RSC.png" alt="Royal Society of Chemistry" class="rounded-[20px]">
          </a>
        </li>
        <li class="clients-item">
          <a href="https://clockworkct.co.uk/" target="_blank">
            <img src="/images/employers/Clockwork.jpeg" alt="Clockwork Creative Technology" class="rounded-[20px]">
          </a>
        </li>
        <li class="clients-item">
          <a href="https://www.stem.org.uk/stem-ambassadors/" target="_blank">
            <img src="/images/employers/STEM.jpg" alt="STEM Learning" class="rounded-[20px]">
          </a>
        </li>
        <li class="clients-item">
          <a href="https://www.bradford.ac.uk/external/" target="_blank">
            <img src="/images/employers/bradford.jpeg" alt="Univeristy of Bradford" class="rounded-[20px]">
          </a>
        </li>
        <li class="clients-item">
          <a href="https://northengland.madscience.org/" target="_blank">
            <img src="/images/employers/MadScience.jpg" alt="Mad Science North England" class="rounded-[20px]">
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>