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
  padding: 0.4rem 2rem;
  font-size: 1.2rem;
  background: #323232;
  color: #fff;
  text-decoration: none;
  user-select: none;
  border-radius: 5px;
}
</style>
