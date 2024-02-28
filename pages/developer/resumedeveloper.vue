<script setup>
useHead({
  title: 'Developer Resume',
})

import ServiceSection from '@/components/ServiceSection.vue'
</script>

<template>
  <section class="timeline">
    <h2 class="text-white">Experience</h2>
      <ol class="timeline-list">
        <!-- Example of a Job Entry -->
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            GSL Media Ltd
          </h4>
          <span>Jan 2020 — Present</span>
          <p class="timeline-item-desc">
            Plymouth, UK
          </p>
          <p class="timeline-text">
            Senior PHP Developer
          </p>
          <ul class="text-white">
            <li>Led the development of a progressive web application enhancing user engagement by 30%.</li>
            <li>Implemented a CI/CD pipeline reducing deployment times by 50%.</li>
            <li>Collaborated closely with the design team to ensure technical feasibility and optimal user experience.</li>
          </ul>
        </li>
        
        <!-- Another Job Entry -->
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Tech Innovations Studio
          </h4>
          <span>May 2017 — Dec 2019</span>
          <p class="timeline-item-desc">
            San Francisco, CA
          </p>
          <p class="timeline-text">
            Web Developer
          </p>
          <ul class="text-white">
            <li>Developed and maintained high-quality, responsive websites and applications using React and Vue.js.</li>
            <li>Optimized applications for maximum speed and scalability.</li>
            <li>Provided technical support and training to team members and clients.</li>
          </ul>
        </li>
      </ol>
    </section>

    <section>
      <h2 class="h2 article-title">
       Skills
      </h2>
      <ServiceSection />
    </section>

    <section class="skill">
      <h3 class="article-title text-white">Skills</h3>
      <ul class="skills-list content-card">
        <!-- Skill Item -->
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              JavaScript (ES6+)
            </h5>
            <data value="95">95%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 95%;" />
          </div>
        </li>

        <!-- Another Skill Item -->
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Vue.js & Nuxt.js
            </h5>
            <data value="90">90%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

        <!-- More Skill Items as Needed -->
      </ul>
    </section>

    <!-- Education Section -->
    <section class="education">
      <h3 class="education-title">Education</h3>
      <ul class="education-list">
        <li>
          <h4>Bachelor of Science in Computer Science</h4>
          <p>University of Technology - 2013-2017</p>
        </li>
        <!-- More Education Entries if Applicable -->
      </ul>
    </section>
</template>

<style scoped>
/* Add your styles here */
.timeline-item ul {
  list-style-type: disc;
  margin-left: 20px;
}
</style>
