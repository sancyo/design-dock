<template>
  <div>
    <the-page-header />
    <div class="inner">
      <div class="dock">
        <h3 class="label">Dock</h3>
        <post-bundle-setter />
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
