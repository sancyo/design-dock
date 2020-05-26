<template>
  <div class="">
    <post-bundle :post-meta="getPostMeta()" />
  </div>
</template>

<script>
import PostBundle from '@/components/organisms/PostBundle'

export default {
  components: {
    PostBundle
  },
  methods: {
    // 記事のメタ情報が格納された配列を取得
    getPostMeta() {
      if (typeof this.$route.params.dock === 'string') {
        return this.$store.getters.getPostMeta(this.$route.params.dock)
      } else {
        return this.$store.getters.getPostMeta(null)
      }
    }
  }
}
</script>

<style></style>
