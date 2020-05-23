<template>
  <div>
    <the-page-header />
    <main class="inner">
      <post-content-setter />
    </main>
    <nuxt />
  </div>
</template>

<script>
import ThePageHeader from '@/layouts/ThePageHeader'
import PostContentSetter from '@/components/template/PostContentSetter'
export default {
  components: {
    ThePageHeader,
    PostContentSetter
  },
  head: {
    htmlAttrs: {
      class: 'article-page'
    }
  }
}
</script>

<style>
.article-page {
  background-color: #f7f7f9;
}
</style>
