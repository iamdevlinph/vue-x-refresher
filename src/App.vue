<template>
  <div id="app">
    <div class="container">
      <h1>Vue & Vuex Refersher</h1>
      <div class="row">
        <div class="col s6">
          <app-books
            status="available"></app-books>
        </div>
        <div class="col s6">
          <app-books
            status="borrowed"></app-books>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
}
</style>
