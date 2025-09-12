<script setup lang="ts">
import { Button } from "@/app/styled";
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
  <div id="LoginContent" class="d-flex flex-column align-items-center justify-content-center">
    <div class="card" id="cardForm">
      <div class="card-body">
        <div class="row">
          <form action="">
            <BFormGroup
              class="mb-3"
              id="fieldset-1"
              label-for="input-1"
              :invalid-feedback="invalidFeedback"
              :state="state"
              label-class="mb-1"
            >
              <BFormInput id="input-2" v-model="name" :state="state" trim />
            </BFormGroup>
            <BFormGroup
              class="mb-3"
              id="fieldset-2"
              label-for="input-2"
              :invalid-feedback="invalidFeedback"
              :state="state"
              label-class="mb-1"
            >
              <BFormInput id="input-2" v-model="name" :state="state" trim />
            </BFormGroup>

            <Button @click="pushDashboard">Acessar</Button>
          </form>
        </div>
      </div>
    </div>
  </div>
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
