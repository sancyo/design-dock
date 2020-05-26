<template>
  <div>
    <post-content :src="sourcePath" />
  </div>
</template>

<script>
import PostContent from '@/components/organisms/PostContent'
export default {
  components: {
    PostContent
  },
  data() {
    return {
      sourcePath: require(`../../content/json/${this.$route.params.post}/index.json`)
    }
  }
}
</script>

<style></style>
