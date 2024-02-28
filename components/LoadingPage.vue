<script setup>
import { ref, defineEmits } from 'vue';

const showLoadingPage = ref(true);
const emit = defineEmits(['selectPath']);

function handleSelection(path) {
  emit('selectPath', path);
}
</script>



<template>
  <div class="w-full flex items-center justify-center" v-show="showLoadingPage">
    <aside class="sidebar entrance">
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img src="/images/sig.png" alt="Profile Picture" class="rounded-full" width="80">
        </figure>

        <h1 class="name" title="Luke Ellis MChem"> Luke B ELlis MChem </h1>

        <p class="title text-white">Choose your path:</p>

        <div class="buttons-container">
          <button class="btn scientist-btn" @click="handleSelection('scientist')">
            <ion-icon name="flask-outline"></ion-icon> Scientist
          </button>
          <button class="btn developer-btn" @click="handleSelection('developer')">
            <ion-icon name="code-slash-outline"></ion-icon> Developer
          </button>
        </div>
      </div>
    </aside>
  </div>
</template>






<style scoped>
.sidebar, .entrance {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 20px;
  padding: 15px;
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.avatar-box img {
  border-radius: 50%; /* Ensuring the profile picture is rounded */
}

.buttons-container {
  display: flex;
  gap: 10px;
  justify-content: center; /* Centering buttons */
  margin-top: 20px;
}

.btn {
  border: none;
  background: var(--jet);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: var(--rich-black-fogra-29);
  color: #f39c12;
}
.btn:hover ion-icon {
  color: #f39c12; /* Change icon color on hover */
}

ion-icon {
  font-size: 20px;
}
</style>
