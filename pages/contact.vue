<script setup>
// Set page title
useHead({
  title: 'Contact',
});

// Define reactive state
const form = ref({
  fullname: '',
  email: '',
  message: '',
});

// Form submission method
const submitForm = () => {
  if (form.value.website) {
    // If honeypot field is filled, it's likely a bot
    console.log('Bot submission detected');
    return; // You can decide to simply return without processing the form
  }
  // Process form submission here for genuine submissions
  console.log('Form data:', form.value);
};
</script>

<template>
  <article class="contact active" data-page="contact">
    <header>
      <h2 class="h2 article-title">
       Contact &nbsp;<font-awesome-icon :icon="['fas', 'envelope']" :style="{ color: '#f39c12' }"/>
      </h2>
    </header>

    <section class="mapbox" data-mapbox>
      <figure>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24102.590462380747!2d-5.669212099999999!3d40.9634385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3f265dc7dd7c45%3A0x2f7ae4d00bbfa9aa!2sSalamanca%2C%20Spain!5e0!3m2!1sen!2suk!4v1709809435749!5m2!1sen!2suk" width="400" height="300" loading="lazy" class="rounded-lg shadow"></iframe>
      </figure>
    </section>

    <section class="contact-form">
      <h3 class="h3 form-title">Contact Form</h3>

      <form action="https://formspree.io/f/mayzkgoy" method="POST" class="form p-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm">
        <div class="input-wrapper">
          <input type="text" name="fullname" class="form-input block w-full px-4 py-2 h-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white" placeholder="Full name" required>
          <input type="email" name="email" class="form-input block w-full px-4 py-2 h-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white" placeholder="Email address" required>
          <!-- Honeypot field (hidden from users) remains the same -->
          <input type="text" name="_gotcha" class="hidden" autocomplete="off">
        </div>
      
        <textarea name="message" class="form-input text-white mt-4 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Your Message" required></textarea>
      
        <!-- Optional: Redirect URL after form submission remains the same -->
        <input type="hidden" name="_next" value="your-redirect-url-here">
      
        <button class="form-btn mt-4 w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">
          <ion-icon name="paper-plane" role="img" class="md hydrated text-lg mr-2" aria-label="paper plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>

    </section>
  </article>
</template>

<style scoped>
/* Add your CSS here. Ensure there's no syntax error. */
.input-wrapper, .form-input, .form-btn {
  /* Styles for input wrapper, input fields, and button */
}
</style>

