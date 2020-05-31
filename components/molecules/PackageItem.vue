<template>
  <section class="package-item">
    <nuxt-link
      class="package-link"
      :to="{
        name: 'package',
        params: { package: path }
      }"
    >
      <span class="package-tag">{{ tag }}</span>
      <h3 class="package-title">{{ name }}</h3>
      <time class="package-date">{{ date }}</time>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.package-item {
  display: inline-block;
  margin-bottom: 1.6rem;
}

.package-link:hover {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 15px 0 rgba(0, 0, 0, 0.14);
}
.package-link {
  display: inline-block;
  padding: 1.6rem;
  background: #fff;
  border-radius: 8px;
  width: 20rem;
  transition: 0.3s;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08), 0 2px 2px 0 rgba(0, 0, 0, 0.1);
}
.package-date {
  display: block;
}
.package-title {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}
.package-tag {
  display: inline-block;
  background: #323232;
  padding: 0.1rem 1.6rem;
  color: #fff;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 0.8rem;
  font-size: 1rem;
}
</style>
