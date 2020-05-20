<template>
  <div class="container">
    <div class="inner content-inner">
      <h2 class="package">Package</h2>
      <post-bundle />
    </div>
  </div>
</template>

<script>
import PostBundle from '@/components/organisms/PostBundle'
export default {
  components: {
    PostBundle
  }
}
</script>

<style scoped>
.package {
  font-size: 3rem;
  margin-bottom: 1.4rem;
}
</style>
