import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const mainFramePropsStore = defineStore("mainFramePropsStore", () => {
  const route = useRoute();

  const toggleSidebar = ref(false);

  const sidebarToggled = computed(() => (!toggleSidebar.value ? "50px" : "220px"));

  const computedWidth = computed(() => (!route.meta.isLogged ? "0px" : sidebarToggled.value));

  return { computedWidth, sidebarToggled, toggleSidebar };
});

export default mainFramePropsStore;
