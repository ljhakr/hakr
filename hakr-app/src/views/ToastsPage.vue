<script setup>
import PageHeading from '@/components/PageHeading.vue';
import ToastMessage from '@/components/ToastMessage.vue';
import {ref} from 'vue';

const toast = ref('success');

function openToast(e) {
  toast.value = e;
}

function closeToast() {
  toast.value = '';
}

</script>
<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :textClass="'mb-20'" :title="'Toasts'"></PageHeading>
      <div data-toast>
        <div class="rounded-xl mx-auto text-center py-8 bg-white dark:bg-blue-900">
          <div class="relative overflow-visible flex justify-center">
            <a href="#" class="relative underline underline-offset-2 inline-block text-blue-900 dark:text-white"
               @click="openToast('success')">Success message</a>
            <a href="#"
               class="sm:border-l-2 border-blue-300 pl-2 ml-2 relative underline underline-offset-2 inline-block text-blue-900 dark:text-white"
               @click="openToast('danger')">Danger message</a>
            <a href="#"
               class="sm:border-l-2 border-blue-300 pl-2 ml-2 relative underline underline-offset-2 inline-block text-blue-900 dark:text-white"
               @click="openToast('warning')">Warning message</a>
            <ThemeToggle :isDarkTheme="isDarkTheme" @toggleDarkTheme="toggleTheme"></ThemeToggle>
            <transition name="kre-toast">
              <ToastMessage :show="toast" @close="closeToast"></ToastMessage>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
