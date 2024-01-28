<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const obj = ref({count: 0});

// template ref
const btn = ref()
const itsacount = ref({count: 2})
onMounted(() => {
  btn.value.addEventListener('click', () => {
    itsacount.value.count++
    console.log('... Button clicked')
  })
})


function count() {
  obj.value.count++;
}
</script>
<template>
  <button
      role="button"
      @click="count"
      class="peer mb-3 w-full sm:w-auto bg-blue-900 hover:bg-blue-600 text-white hover:scale-105 transition ease-in duration-75 py-2 px-3 rounded-md">
    On click ({{ obj.count }})
  </button>
  <button
      role="button"
      ref="btn"
      class="peer mb-3 w-full sm:w-auto bg-blue-900 hover:bg-blue-600 text-white hover:scale-105 transition ease-in duration-75 py-2 px-3 rounded-md">
    With ref attr ({{ itsacount.count }})</button>
  <p class="ml-2 invisible peer-hover:visible">Click button to increase count</p>
</template>
