<template>
  <span class="post-tag">{{ tagName }}</span>
</template>

<script>
export default {
  props: {
    // タグの色
    tagColor: {
      type: String,
      default: ''
    },
    // 表示するタグの名前
    tagName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped></style>
