<script setup>
import EventCard from '@/components/EventCard.vue';
import PageHeading from '@/components/PageHeading.vue';

const events = [
  {
    id: 0,
    header: 'Latest news!',
    footer: 'Support the Robot revolt!',
    title: 'Upcoming event 1',
    event: '<p class="group-hover:text-white">My first event</p>',
    url: '/events',
  },
  {
    id: 1,
    header: 'Register early!',
    footer: 'See you there!',
    title: 'Upcoming event 2',
    event: '<p class="group-hover:text-white">Lets go fishing</p>',
    url: '/events',
  },
  {
    id: 2,
    header: 'Upcoming event!',
    footer: 'Stay tuned for more events!',
    title: 'Upcoming event 3',
    event: '<p class="group-hover:text-white">Walking on the beach</p>',
    url: '/events',
  },
];
</script>
<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :subTitle="'Cards'" :title="'Cards'"></PageHeading>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <EventCard v-for="event in events" :key="event.id" :content="event.event" :footer="event.footer"
                   :header="event.header" :title="event.title" :url="event.url"></EventCard>
      </div>
    </div>
  </div>
</template>
