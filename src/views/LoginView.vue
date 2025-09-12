<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const pushDashboard = () => {
  router.push({ name: "dashboard" });
};
</script>

<template>
  <button @click="pushDashboard"></button>
</template>

<style lang="css" scoped>
#LoginContent {
  min-width: 100%;
  min-height: 100%;
}

#cardForm {
  width: 500px;
  height: 375px;
  max-width: 500px;
  max-height: 375px;
}
</style>
