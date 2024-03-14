<template>
    <section class="contact-form">
      <h3 class="h3 form-title">{{ t('formTitle') }}</h3>
      <!-- Updated form action to use Formspree's endpoint -->
      <form action="https://formspree.io/f/mayzkgoy" method="POST" @submit.prevent="checkForm" class="form p-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm">
        <div class="input-wrapper">
          <input type="text" v-model="form.fullname" name="fullname"
                 class="form-input block w-full px-4 py-2 h-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                 :placeholder="t('fullNamePlaceholder')" required>
          <input type="email" v-model="form.email" name="email"
                 class="form-input block w-full px-4 py-2 h-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                 :placeholder="t('emailAddressPlaceholder')" required>
          <textarea name="message" v-model="form.message"
                    class="form-input text-white mt-4 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    :placeholder="t('messagePlaceholder')" required></textarea>
        </div>
        <!-- Honeypot field; hidden from bots -->
        <input type="text" name="_gotcha" style="display:none">
        <button class="form-btn mt-4 w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">
          {{ t('sendMessageButton') }}
        </button>
      </form>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { translations } from '@/server/api/Contact';
  
  const { t } = useI18n({
    messages: translations,
  });
  
  const form = ref({
    fullname: '',
    email: '',
    message: '',
  });
  
  function checkForm(event) {
    // Add any pre-submit logic or validation here
    // If everything is okay, allow the form to be submitted
    if (form.value.fullname && form.value.email && form.value.message) {
      event.target.submit(); // Manually submit the form
    } else {
      console.log('Validation failed.');
      event.preventDefault();
    }
  }
  </script>
  
  <style scoped>
  .form-input, .form-btn {
    margin-top: 1rem;
    /* Additional styles */
  }
  </style>
  