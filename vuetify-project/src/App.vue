<script setup>
import SidebarNav from '@/components/SidebarNav.vue';
</script>
<template>
  <v-container>
    <v-row>
      <v-col class="v-col-3">
        <SidebarNav/>
        <nav class="">
          <router-link class="" to="/">Home</router-link>
        </nav>
      </v-col>
      <v-col class="v-col-9 bg-deep-purple-lighten-2">
        <div class="">
          <router-view v-slot="{ Component }">
            <transition name="kre-router">
              <div>
                <component :is="Component"/>
              </div>
            </transition>
          </router-view>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
