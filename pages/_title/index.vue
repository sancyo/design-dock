<template>
  <main class="container">
    <div class="inner content-inner">
      <div class="post-head">
        <span class="post-tag">{{ sourcePath.tag }}</span>
        <h2 class="post-title">{{ sourcePath.title }}</h2>
        <time class="post-day">{{ sourcePath.date }}</time>
      </div>
      <div class="post-content" v-html="sourcePath.bodyHtml"></div>
    </div>
  </main>
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
  },
  layout: 'ArticlePage'
}
</script>

<style scoped>
html {
  background: #fff;
}
.inner {
  background: #fff;
  max-width: 800px;
  margin: 3.2rem auto;
}
.post-head {
  text-align: center;
}
</style>
