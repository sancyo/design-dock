<template>
  <span class="post-tag">{{ name }}</span>
</template>

<script>
export default {
  props: {
    // 表示するタグの名前
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.post-tag {
  display: inline-block;
  background-color: #323232;
  color: #fff;
  font-weight: bold;
  padding: 0.3rem 3.2rem 0.5rem;
  border-radius: 12px;
  font-size: 1.3rem;
}
</style>
