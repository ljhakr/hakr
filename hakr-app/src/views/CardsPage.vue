<script setup>
import EventCard from '@/components/EventCard.vue';
import PageHeading from '@/components/PageHeading.vue';

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
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :title="'VUE app with Tailwind'" :subTitle="'Cards'"></PageHeading>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <EventCard :key="event.id" v-for="event in events" :title="event.title" :content="event.event" :url="event.url"></EventCard>
      </div>
    </div>
  </div>
</template>
