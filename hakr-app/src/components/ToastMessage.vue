<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defineEmits, withDefaults, defineProps } from 'vue';

export interface Props {
  show?: string
}
const props = withDefaults(defineProps<Props>(), {
  show: '/about',
})

const emits = defineEmits(['close']);
</script>
<template>
  <div v-if="props.show === 'success'" id="toast-success"
       class="kre-toast absolute bottom-16 -top-20 flex items-center p-4 mb-2 w-full max-w-xs bg-white rounded-lg drop-shadow-lg shadow-red text-gray-800"
       role="alert">
    <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 rounded-lg">
      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">Check icon</span>
    </div>
    <div class="text-left ml-3 text-sm font-normal break-words">Success! Lorem ipsum success! Success, success & success!</div>
    <button type="button"
            @click="emits('close');"
            class="inline-flex flex-shrink-0 justify-center ml-auto -mx-1.5 -my-1.5 bg-white text-gray-800 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-2 hover:bg-gray-100 h-8 w-8"
            data-dismiss-target="#toast-success" aria-label="Close">
      <span class="sr-only">Close</span>
      <font-awesome-icon size="1x" :icon="['fas', 'fa-xmark']" />
    </button>
  </div>

  <div v-if="props.show === 'danger'" id="toast-danger"
       class="kre-toast absolute flex items-center p-4 mb-2 w-full max-w-xs bg-white rounded-lg drop-shadow-lg shadow-red text-gray-800"
       role="alert">
    <div
        class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg">
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">Error icon</span>
    </div>
    <div class="text-left ml-3 text-sm font-normal break-words">Danger!</div>
    <button type="button"
            @click="emits('close');"
            class="inline-flex flex-shrink-0 justify-center ml-auto -mx-1.5 -my-1.5 bg-white text-gray-800 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-2 hover:bg-gray-100 h-8 w-8"
            data-dismiss-target="#toast-success" aria-label="Close">
      <span class="sr-only">Close</span>
      <font-awesome-icon size="1x" :icon="['fas', 'fa-xmark']" />
    </button>
  </div>

  <div v-if="props.show === 'warning'" id="toast-warning"
       class="kre-toast absolute flex items-center p-4 mb-2 w-full max-w-xs bg-white rounded-lg drop-shadow-lg shadow-red text-gray-800"
       role="alert">
    <div
        class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-orange-400 bg-orange-100 rounded-lg">
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">Warning icon</span>
    </div>
    <div class="text-left ml-3 text-sm font-normal break-words">Warning!</div>
    <button type="button"
            @click="emits('close');"
            class="inline-flex flex-shrink-0 justify-center ml-auto -mx-1.5 -my-1.5 bg-white text-gray-800 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-2 hover:bg-gray-100 h-8 w-8"
            data-dismiss-target="#toast-success" aria-label="Close">
      <span class="sr-only">Close</span>
      <font-awesome-icon size="1x" :icon="['fas', 'fa-xmark']" />
    </button>
  </div>
</template>
