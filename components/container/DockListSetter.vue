<template>
  <dock-list :dock-list="getDockList" />
</template>

<script>
import DockList from '@/components/organisms/DockList'

export default {
  components: {
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

<style scoped></style>
