<template>
  <div class="container header-container">
    <div class="inner header-inner">
      <h1>
        <nuxt-link to="/" class="site-logo">
          <img class="logo" src="@/static/site-logo@2x.png" alt="DesignDock" />
        </nuxt-link>
      </h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header-container {
  background-color: #fff;
}
.header-inner {
  background-color: #fff;
}
.logo {
  padding: 0.8em 0;
  width: 170px;
}
</style>
