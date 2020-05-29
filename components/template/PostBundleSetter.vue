<template>
  <div class="">
    <post-bundle :file-path-array="packageContent()" />
  </div>
</template>

<script>
import PostBundle from '@/components/organisms/PostBundle'

export default {
  components: {
    PostBundle
  },
  methods: {
    packageContent() {
      // パッケージに含まれるコンテンツのファイルパスを格納した配列
      const meta = this.$store.getters.getPackageContent(
        this.$route.params.package
      )
      return meta
    }
  }
}
</script>

<style></style>
