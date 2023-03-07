<script setup>
import PageHeading from '@/components/PageHeading.vue';
import EventsListButton from '@/components/EventsListButton';
import EventsList from '@/components/EventsList';
import TransitionButton from '@/components/TransitionButton';
import TransitionButton2 from '@/components/TransitionButton2';
import {ref} from 'vue';

const isDarkTheme = ref(false);
const isShowButton = ref(true);
const isShowEventsList = ref(false);
const events = [
  {
    title: 'Upcoming event 1',
  },
  {
    title: 'Upcoming event 2',
  },
  {
    title: 'Upcoming event 3',
  },
];

function toggleTheme() {
  // rootElement.classList.toggle('dark');
  document.querySelector('[data-theme]').classList.toggle('dark');
  isDarkTheme.value = !isDarkTheme.value;
}

function toggleButton() {
  isShowButton.value = !isShowButton.value;
  console.log('isShowButton value ' + isShowButton.value);
}

function showEventsList() {
  isShowEventsList.value = !isShowEventsList.value;
  console.log('isShowEventsList value ' + isShowEventsList.value);
}

</script>
<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :textClass="'mb-20'" :title="'Transitions'"></PageHeading>
      <div class="mb-20">
        <h2 class="mb-0">Tailwind</h2>
        <p>Tailwind transitions are done with classes</p>
        <h3>Click to toggle between light and dark theme</h3>
        <div data-theme>
          <TransitionButton :isDarkTheme="isDarkTheme" @toggleDarkTheme="toggleTheme"
                            :class="'bg-blue-300 text-gray-900 dark:bg-blue-900 dark:text-gray-100 duration-300'">
            Button
          </TransitionButton>
        </div>
      </div>

      <div class="mb-20">
        <h2 class="mb-0">Vue</h2>
        <p>Vue transitions are done with css</p>
        <h3>Click to trigger a thank you message</h3>
        <Transition name="kre-transition-button">
          <TransitionButton2 :isShowButton="isShowButton" @toggleButton="toggleButton" :class="''">
            Message
          </TransitionButton2>
        </Transition>
      </div>

      <div class="mb-20">
        <p>Transition group</p>
        <h3>Click button to load some list items</h3>
        <EventsListButton @showEventsList="showEventsList" :buttonClass="'bg-blue-300 text-gray-900'">Events
        </EventsListButton>
        <EventsList :events="events" :isShowEventsList="isShowEventsList"></EventsList>
      </div>
    </div>
  </div>
</template>
