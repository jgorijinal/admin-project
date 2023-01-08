<template>
  <div class="app-main">
    <template v-for="n in 100" :key="n">
      <h1>AppMain</h1>
    </template>
  </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
  .app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: auto;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box;
}
</style>