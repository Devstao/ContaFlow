<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const pushDashboard = (e: Event) => {
  e.preventDefault();
  router.push({ name: "dashboard" });
};
</script>

<template>
  <div id="LoginContent" class="d-flex flex-column justify-content-center align-items-center">
    <div class="row bg-solarized align-items-center" id="cardForm">
      <form
        @submit="pushDashboard"
        class="col-md-6 d-flex flex-column justify-content-center gap-0"
        style="height: 100%"
      >
        <BFormGroup id="fieldset-1" label-class="mb-4">
          <BFormInput class="mb-4" id="input-1" trim />
        </BFormGroup>
        <BFormGroup id="fieldset-1" label-class="mb-4">
          <BFormInput class="mb-4" id="input-1" trim />
        </BFormGroup>

        <BButton type="submit" class="mt-5 mb-1 fw-bold" variant="success">Login</BButton>
      </form>
      <div class="col-md-6 bg-white" id="LogoDiv"></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
#LoginContent {
  width: 100%;
  height: 100%;
}

#cardForm {
  width: 65%;
  height: 75%;
  border-radius: 5px;
}

#LogoDiv {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 100%;
}
</style>
