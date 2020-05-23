<template>
  <div class="top-page">
    <div class="inner">
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
      return this.$store.getters.getPostMeta(null)
    },
    getDockList() {
      return this.$store.getters.getDockList
    }
  }
}
</script>

<style scoped></style>
