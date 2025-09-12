<script setup lang="ts">
import { MainFrame } from "../../styled";
</script>

<template>
  <MainFrame class="container-fluid">
    Apenas um teste!

    <RouterLink :to="{ name: 'login' }"> login</RouterLink>
  </MainFrame>
</template>
