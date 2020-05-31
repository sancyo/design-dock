<template>
  <div>
    <the-page-header />
    <div class="inner">
      <dock-list-setter />
      <package-bundle-setter />
    </div>
    <nuxt />
  </div>
</template>

<script>
import ThePageHeader from '@/layouts/ThePageHeader'
import DockListSetter from '@/components/template/DockListSetter'
import PackageBundleSetter from '@/components/template/PackageBundleSetter'
export default {
  components: {
    ThePageHeader,
    DockListSetter,
    PackageBundleSetter
  }
}
</script>

<style scoped>
.inner {
  padding: 5.6rem 0;
  justify-content: flex-end;
  position: relative;
}
.dock {
  width: 350px;
}
.label {
  background: #383838;
  padding: 1.2rem 1.6rem;
  color: #fff;
  font-size: 2rem;
  border-radius: 5px 5px 0 0;
}
.right {
  background: #fff;
  width: 640px;
  min-height: 800px;
}
</style>
