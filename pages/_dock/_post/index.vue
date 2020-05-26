<template>
  <div class="container">
    <div class="inner">
      <div class="dock">
        <h3 class="label">Package</h3>
        <dock-list-setter />
        <post-bundle-setter />
      </div>
      <div class="right">
        <h3 class="label">Content</h3>
        <post-content-setter />
        {{ this.$route.params }}
      </div>
    </div>
  </div>
</template>

<script>
import DockListSetter from '@/components/template/DockListSetter'
import PostBundleSetter from '@/components/template/PostBundleSetter'
import PostContentSetter from '@/components/template/PostContentSetter'
export default {
  validate({ params, store }) {
    // 指定されたmdファイルがあるか確認
    return store.getters.getSourceFileArray.includes(
      `content/blog/${params.post}/index.md`
    )
  },
  components: {
    DockListSetter,
    PostBundleSetter,
    PostContentSetter
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
