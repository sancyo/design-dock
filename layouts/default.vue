<template>
  <div>
    <the-page-header />
    <dock-list />
    <nuxt />
  </div>
</template>

<script>
import ThePageHeader from '@/layouts/ThePageHeader'
import DockList from '@/components/organisms/DockList'
export default {
  components: {
    ThePageHeader,
    DockList
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

ul,
li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

a,
a:active {
  text-decoration: none;
  color: #323232;
}

.container {
  margin: 0 auto;
}

.inner {
  max-width: 1024px;
  margin: 0 auto;
}

.package {
  font-size: 3rem;
  margin-bottom: 1.4rem;
}
</style>
