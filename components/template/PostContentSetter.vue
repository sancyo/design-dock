<template>
  <div>
    <post-content :src="getSourcePath()" />
  </div>
</template>

<script>
import PostContent from '@/components/organisms/PostContent'
export default {
  components: {
    PostContent
  },
  watch: {
    $route(to, from) {
      this.getSourcePath()
    }
  },
  methods: {
    getSourcePath() {
      this.$store.commit('setPackageContentSource', {
        package: this.$route.params.package,
        content: this.$route.params.content
      })
      return this.$store.getters.getPackageContentSource
    }
  }
}
</script>

<style></style>
