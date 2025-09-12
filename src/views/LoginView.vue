<template>
  <div id="LoginContent" class="d-flex flex-column justify-content-center">
    <div class="card ms-auto me-auto">
      <div class="card-body">teste</div>

      <RouterLink :to="{ name: 'dashboard' }"> Acessar dashboard </RouterLink>
    </div>
  </div>
</template>

<style lang="css" scoped>
#LoginContent {
  min-height: 100%;
}
</style>
