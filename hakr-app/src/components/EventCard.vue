<script lang="ts" setup>
import SingleCard from "@/prototypes/SingleCard.vue";
import {withDefaults, defineProps, ref} from 'vue';

export interface Props {
  header: string
  footer: string
  title: string
  content: string
  url?: string
}

const props = withDefaults(defineProps<Props>(), {
  url: '/about'
})

const done = ref(false);
</script>
<template>
  <SingleCard :cardClass="'border border-blue-900'">
    <template #card-header>
      <div class="text-sky">
        <input v-model="done" type="checkbox"/> <span
          :class="{ 'text-green font-bold line-through' : done }">{{ props.header }}</span>
      </div>
    </template>
    <div class="relative group hover:bg-blue-900 p-5 my-3 rounded-lg">
      <h2>
        <router-link :to="props.url" class="after:absolute after:inset-0 group-hover:text-white">{{
            props.title
          }}
        </router-link>
      </h2>
      <span v-html="props.content"></span>
    </div>
    <template #card-footer>
      <div class="text-sky">
        {{ props.footer }}
      </div>
    </template>
  </SingleCard>
</template>

<style>
.done {
  color: green;
  font-weight: bold;
}
</style>