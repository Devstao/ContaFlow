<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const name = ref("");
const router = useRouter();
const state = computed(() => name.value.length >= 4);
const invalidFeedback = computed(() =>
  name.value.length > 0 ? "Enter at least 4 characters." : "Please enter something."
);

const pushDashboard = () => {
  router.push({ name: "dashboard" });
};
</script>

<template>
  <button @click="pushDashboard"></button>
</template>

<style lang="css">
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
