<script setup lang="ts">
import SideBar from "@/app/styled/sidebar";
import { storeToRefs } from "pinia";
import mainFramePropsStore from "./app/stores/main";
import MainFrame from "./app/styled";
import TitlebarView from "./components/TitlebarView.vue";
const { computedWidth } = storeToRefs(mainFramePropsStore());
</script>

<template>
  <div id="ContentApp">
    <TitlebarView />
    <RouterView v-slot="{ Component }">
      <MainFrame :margin-left="computedWidth">
        <SideBar :width="computedWidth" />
        <Transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </Transition>
      </MainFrame>
    </RouterView>
  </div>
</template>

<style>
#ContentApp {
  min-height: 100%;
}
</style>
