<template>
  <post-bundle :post-meta="getPostMeta" />
</template>

<script>
import PostBundle from '@/components/organisms/PostBundle'

export default {
  components: {
    PostBundle
  },
  computed: {
    // 記事のメタ情報を取得
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
