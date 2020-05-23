<template>
  <div class="container"></div>
</template>

<script>
export default {
  layout: 'post',
  validate({ params, store }) {
    // 指定されたmdファイルがあるか確認
    return store.getters.getSourceFileArray.includes(
      `content/blog/${params.path}/index.md`
    )
  }
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
