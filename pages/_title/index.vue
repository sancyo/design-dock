<template>
  <div class="container">
    <div v-html="sourcePath.bodyHtml"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sourcePath: ''
    }
  },
  created() {
    // 表示する記事のファイルパス
    this.sourcePath = require(`../../content/json/${this.$route.params.path}/index.json`)
  },
  validate({ params, store }) {
    // 指定されたmdファイルがあるか確認
    return store.getters.getSourceFileArray.includes(
      `content/blog/${params.path}/index.md`
    )
  }
}
</script>

<style scoped></style>
