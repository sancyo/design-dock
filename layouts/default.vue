<template>
  <div>
    <the-page-header />
    <nuxt />
  </div>
</template>

<script>
import ThePageHeader from '@/layouts/ThePageHeader'
// import DockListSetter from '@/components/template/DockListSetter'
// import PostBundleSetter from '@/components/template/PostBundleSetter'
// import PostContentSetter from '@/components/template/PostContentSetter'
export default {
  components: {
    ThePageHeader
    // DockListSetter,
    // PostBundleSetter
    // PostContentSetter
  }
}
</script>

<style scoped>
.inner {
  display: flex;
  padding: 5.6rem 0;
  justify-content: flex-end;
  position: relative;
}
.dock {
  width: 350px;
  position: fixed;
  left: calc((100vw - 1024px) / 2);
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
