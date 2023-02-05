<script setup>
import PageHeading from '@/components/PageHeading.vue';
import ThemeToggle from '@/components/ThemeToggle.vue';
import {ref} from 'vue';

const isDarkTheme = ref(false);

function toggleTheme() {
  // rootElement.classList.toggle('dark');
  document.querySelector('[data-theme]').classList.toggle('dark');
  isDarkTheme.value = !isDarkTheme.value;
}

</script>
<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :textClass="'mb-20'" :title="'Dark theme'"></PageHeading>
      <div data-theme>
        <div class="relative lg:w-1/2 bg-blue-100 dark:bg-blue-900 text-gray-800 dark:text-white mx-auto p-10 rounded-l">
          Some dummy text.
          <ThemeToggle :isDarkTheme="isDarkTheme" @toggleDarkTheme="toggleTheme"></ThemeToggle>
        </div>
      </div>
    </div>
  </div>
</template>
