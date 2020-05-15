<template>
  <div class="container">
    <div v-html="sourcePath.bodyHtml"></div>
    {{ sourceFileArray }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: [],
      sourcePath: '',
      sourceFileArray: []
    }
  },
  created() {
    // 表示する記事のファイルパス
    this.sourcePath = require(`../../content/json/${this.$route.params.path}/index.json`)
    // 記事が保存してあるファイルパスの一覧
    this.sourceFileArray = this.getSourceFileArray()
  },
  methods: {
    // ここで取得したjsonデータを用いて、バリデーションを行う
    getSourceFileArray() {
      return this.$store.getters.getItemList.sourceFileArray
    }
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
