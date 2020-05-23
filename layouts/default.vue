<template>
  <div>
    <the-page-header />
    <div class="inner">
      <dock-list-setter />
      <post-bundle-setter />
    </div>
    <nuxt />
  </div>
</template>

<script>
import ThePageHeader from '@/layouts/ThePageHeader'
import DockListSetter from '@/components/template/DockListSetter'
import PostBundleSetter from '@/components/template/PostBundleSetter'
export default {
  components: {
    ThePageHeader,
    DockListSetter,
    PostBundleSetter
  }
}
</script>

<style scoped></style>
