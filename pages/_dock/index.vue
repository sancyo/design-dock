<template>
  <div class="container"></div>
</template>

<script>
export default {
  layout: 'home',
  components: {}
}
</script>

<style scoped>
.inner {
  display: flex;
  padding: 5.6rem 0;
  justify-content: flex-end;
  position: relative;
}
.dock {
  width: 350px;
  position: fixed;
  left: calc((100vw - 1024px) / 2);
}
.label {
  background: #383838;
  padding: 1.2rem 1.6rem;
  color: #fff;
  font-size: 2rem;
  border-radius: 5px 5px 0 0;
}
.right {
  background: #fff;
  width: 640px;
  min-height: 800px;
}
</style>
