<template>
  <div class="container">
    <div class="inner content-inner">
      <h2 class="package">Package</h2>
      <post-bundle :sort-tag="this.$route.params.dock" />
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

<style scoped></style>
