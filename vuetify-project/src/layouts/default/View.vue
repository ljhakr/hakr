<template>
  <v-main>
    <router-view v-slot="{ Component }">
      <transition name="kre-router">
        <div>
          <component :is="Component"/>
        </div>
      </transition>
    </router-view>
  </v-main>
</template>

<script lang="ts" setup>
//
</script>
