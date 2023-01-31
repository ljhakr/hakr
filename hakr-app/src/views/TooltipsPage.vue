<script setup>
import PageHeading from '@/components/PageHeading.vue';

</script>
<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :title="'VUE app with Tailwind'" :subTitle="'Tooltips'"></PageHeading>
      <p class="mb-4">You might have to reload the page to get the tooltip working</p>

      <svg class="animate-bounce w-10 h-10 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M112 64v176H32c-17.69 0-32 14.36-32 31.1C0 280.3 3.252 288.5 9.375 294.6l160 176C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-176C380.7 288.5 384 280.3 384 271.1C384 254.4 369.7 240 352 240h-80V64c0-17.67-14.33-32-32-32h-96C126.3 32 112 46.33 112 64zM240 64v208l110.9 1.1L192 447.9L32 272H144V64H240z"/></svg>

      <button data-tooltip-target="tooltip-default" data-tooltip-placement="right" type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Hover me
      </button>
      <div id="tooltip-default" role="tooltip"
           class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
        Tooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip contentTooltip content
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  </div>
</template>
