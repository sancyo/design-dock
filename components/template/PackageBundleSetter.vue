<template>
  <div>
    <package-bundle :package-array="getPackageArray()" />
  </div>
</template>

<script>
import PackageBundle from '@/components/organisms/PackageBundle'
export default {
  components: {
    PackageBundle
  },
  methods: {
    // 記事のメタ情報が格納された配列を取得
    getPackageArray() {
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
