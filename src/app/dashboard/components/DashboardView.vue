<script setup lang="ts">
import CardsView from "./CardsView.vue";
</script>

<template>
  <div class="card" style="min-height: 100%">
    <div class="card-header">teste</div>
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          <CardsView />
        </div>
        <div class="col-12">
          <RouterLink :to="{ name: 'login' }"> login</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
