<script setup>
import PageHeading from '@/components/PageHeading.vue';
import ButtonCounter from '@/components/ButtonCounter.vue';
import BooksCounter from '@/components/BooksCounter.vue';
import HorizontalRuler from '@/components/HorizontalRuler.vue';
import EventCard from '@/components/EventCard.vue';
import NoticeMessage from '@/components/NoticeMessage.vue';
import ReactiveCounter from '@/components/ReactiveCounter';
import ThemeToggle from '@/components/ThemeToggle.vue';
import ToastMessage from '@/components/ToastMessage.vue';
import ModalScreen from '@/prototypes/ModalScreen.vue';
// import '@/data/events.js';
import {ref} from 'vue';

const isDarkTheme = ref(false);

// let rootElement = document.documentElement;

function toggleTheme() {
  // rootElement.classList.toggle('dark');
  document.querySelector('[data-toast]').classList.toggle('dark');
  isDarkTheme.value = !isDarkTheme.value;
}

const modal = ref(false);
const toast = ref('success');

function openModal() {
  modal.value = true;
}

function closeModal() {
  modal.value = false;
}

function openToast(e) {
  toast.value = e;
}

function closeToast() {
  toast.value = '';
}

const events = [
  {
    id: 0,
    title: 'Upcoming event 1',
    event: '<p class="group-hover:text-white">My first event</p>',
    url: '/events',
  },
  {
    id: 1,
    title: 'Upcoming event 2',
    event: '<p class="group-hover:text-white">Lets go fishing</p>',
    url: '/events',
  },
  {
    id: 2,
    title: 'Upcoming event 3',
    event: '<p class="group-hover:text-white">Walking on the beach</p>',
    url: '/events',
  },
];
</script>
<template>
  <div class="mb-3 container md:w-2/3 xl:w-1/2 max-w-2xl mx-auto">
    <NoticeMessage :noticeType="'warning'"></NoticeMessage>
  </div>
  <div class="mb-10 container md:w-2/3 xl:w-1/2 max-w-2xl mx-auto flex justify-center">
    <NoticeMessage :noticeType="'success'">Success!</NoticeMessage>
  </div>

  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :title="'VUE app with Tailwind'" :subTitle="'Looking good.'"></PageHeading>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <EventCard :key="event.id" v-for="event in events" :title="event.title" :content="event.event" :url="event.url"></EventCard>
      </div>

      <button data-tooltip-target="tooltip-default" data-tooltip-placement="right" type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Default tooltip
      </button>
      <div id="tooltip-default" role="tooltip"
           class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
        Tooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip content
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

      <ReactiveCounter/>

      <HorizontalRuler :hrClass="''"/>

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

      <HorizontalRuler/>

      <div class="columns-1 lg:columns-2 gap-14 lg:flex items-end">
        <div class="grid w-full text-center mb-8">
          <ButtonCounter></ButtonCounter>
          <a href="#" class="underline underline-offset-2 inline-block mt-2" @click="openModal">About this counter</a>
        </div>
        <HorizontalRuler :hrClass="'lg:hidden'"/>
        <div class="w-full text-center mb-8">
          <BooksCounter></BooksCounter>
        </div>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <ModalScreen :show="modal" @close="closeModal">
      <template #header>
        <h1 class="mb-4">Information</h1>
      </template>
      <template #body>
        <p>It's a counter.</p>
      </template>
      <template #footer>
      </template>
    </ModalScreen>
  </Teleport>
</template>
