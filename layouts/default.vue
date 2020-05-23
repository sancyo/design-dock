<template>
  <div>
    <the-page-header />
    <dock-list-setter />
    <nuxt />
  </div>
</template>

<script>
import ThePageHeader from '@/layouts/ThePageHeader'
import DockListSetter from '@/components/template/DockListSetter'
export default {
  components: {
    ThePageHeader,
    DockListSetter
  }
}
</script>

<style scoped></style>
