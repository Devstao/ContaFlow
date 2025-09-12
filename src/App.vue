<script setup lang="ts">
import TitlebarView from "./components/TitlebarView.vue";
import SideBarComponent from "./views/app/dashboard/styled/sidebar";
</script>

<template>
  <TitlebarView />
  <SideBarComponent />
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>

<style>
#ContentApp {
  min-height: 100dvh;
}
</style>
