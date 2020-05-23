<template>
  <div class="post-page">
    <div class="inner post-page-inner">
      <dock-list :dock-list="getDockList" />
      <post-bundle :post-meta="getPostMeta" />
    </div>
  </div>
</template>

<script>
import PostBundle from '@/components/organisms/PostBundle'
import DockList from '@/components/organisms/DockList'

export default {
  components: {
    PostBundle,
    DockList
  },
  computed: {
    // 記事のメタ情報を取得
    getPostMeta() {
      return this.$store.getters.getPostMeta(this.$route.params.dock)
    },
    getDockList() {
      return this.$store.getters.getDockList
    }
  }
}
</script>

<style scoped>
.post-page-inner {
  margin: 3.2rem auto;
}
</style>
