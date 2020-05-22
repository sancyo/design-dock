<template>
  <div>
    <the-page-header />
    <nuxt />
  </div>
</template>

<script>
import ThePageHeader from '@/layouts/ThePageHeader'
export default {
  components: {
    ThePageHeader
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
