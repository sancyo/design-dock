<template>
  <div class="post-content">
    {{ src }}
  </div>
</template>

<script>
export default {
  props: {
    // 記事のHTML
    src: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped></style>
