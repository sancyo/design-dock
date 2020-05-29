<template>
  <div>
    <the-page-header />
    <div class="inner">
      <div class="dock">
        <h3 class="label">Dock</h3>
        <post-bundle-setter />
      </div>
      <div class="right">
        <h3 class="label">Content</h3>
        <post-content-setter />
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
import ThePageHeader from '@/layouts/ThePageHeader'
import PostBundleSetter from '@/components/template/PostBundleSetter'
export default {
  components: {
    ThePageHeader,
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
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08), 0 2px 2px 0 rgba(0, 0, 0, 0.1);
}
.label {
  background: #323232;
  padding: 1.2rem 1.6rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 900;
  border-radius: 5px 5px 0 0;
}
.right {
  background: #fff;
  width: 640px;
  min-height: 800px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08), 0 2px 2px 0 rgba(0, 0, 0, 0.1);
}
</style>
