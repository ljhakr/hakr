<script setup>
import NoticeMessage from '@/components/NoticeMessage.vue';
import PageHeading from '@/components/PageHeading.vue';

</script>
<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :title="'Notice'" :subTitle="'Notice'"></PageHeading>
      <div class="mb-3 container md:w-2/3 xl:w-1/2 max-w-2xl mx-auto">
        <NoticeMessage :noticeType="'warning'"></NoticeMessage>
      </div>
      <div class="mb-10 container md:w-2/3 xl:w-1/2 max-w-2xl mx-auto flex justify-center">
        <NoticeMessage :noticeType="'success'">Success!</NoticeMessage>
      </div>
    </div>
  </div>
</template>
