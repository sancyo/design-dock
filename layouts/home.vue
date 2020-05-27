<template>
  <div>
    <the-page-header />
    <div class="inner">
      <div class="dock">
        <h3 class="label">Package</h3>
        <dock-list-setter />
        <post-bundle-setter />
      </div>
      <div class="right">
        <h3 class="label">Content</h3>
        {{ this.$route.params }}
      </div>
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
