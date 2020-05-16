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
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 62.5%;
  background-color: #dce1eb;
}

h1,
h2,
h3,
p {
  margin: 0;
}

.container {
  margin: 0 auto;
}

.inner {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
