<template>
  <div class="post-main" v-html="html"></div>
</template>

<script>
export default {
  props: {
    html: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.post-main {
  max-width: 620px;
  margin: 0 auto;
}
</style>
