<template>
  <div class="container">
    <div class="inner content-inner">
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
