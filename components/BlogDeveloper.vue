<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useFetch } from '@vueuse/core';

const { locale } = useI18n({ useScope: 'global' });
const blogPosts = ref([]);

onMounted(async () => {
  const { data } = await useFetch('/api/BlogDeveloper').json();

  if (data.value && data.value.posts) {
    blogPosts.value = data.value.posts;
  }
});
</script>

<template>
  <article class="blog active" data-page="blog">
    <header>
      <h2 class="h2 article-title">
        Projects &nbsp;<font-awesome-icon :icon="['fas', 'code']" :style="{ color: '#f39c12' }"/>
      </h2>
    </header>

    <section class="blog-posts">
      <ul class="blog-posts-list">
        <li v-for="post in blogPosts" :key="post.id" class="blog-post-item">
          <a :href="post.url">
            <figure class="blog-banner-box">
              <img :src="post.imageSrc" :alt="post.altText[locale]" loading="lazy">
            </figure>
            <div class="blog-content">
              <div class="blog-meta">
                <p class="blog-category">{{ post.category[locale] }}</p>
                <span class="dot"></span>
                <time :datetime="post.date">{{ new Date(post.date).toLocaleDateString(locale.value) }}</time>
              </div>
              <h3 class="h3 blog-item-title">{{ post.title[locale] }}</h3>
              <p class="blog-text">{{ post.description[locale] }}</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>
