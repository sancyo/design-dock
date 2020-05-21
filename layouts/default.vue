<template>
  <div>
    <the-page-header />
    <dock-list />
    <nuxt />
  </div>
</template>

<script>
import ThePageHeader from '@/layouts/ThePageHeader'
import DockList from '@/components/organisms/DockList'
export default {
  components: {
    ThePageHeader,
    DockList
  }
}
</script>

<style scoped></style>
