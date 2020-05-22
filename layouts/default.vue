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
import DockListSetter from '@/components/container/DockListSetter'
import PostBundleSetter from '@/components/container/PostBundleSetter'
export default {
  components: {
    ThePageHeader,
    DockListSetter,
    PostBundleSetter
  }
}
</script>

<style scoped></style>
