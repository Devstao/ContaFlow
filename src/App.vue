<script setup lang="ts">
import { onMounted } from "vue";

import { ask } from "@tauri-apps/plugin-dialog";
import TitlebarView from "./components/TitlebarView.vue";

onMounted(async () => {
  const answer = await ask("This action cannot be reverted. Are you sure?", {
    title: "Tauri",
    kind: "warning",
  });

  console.log(answer);
});
</script>

<template>
  <TitlebarView />
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>
