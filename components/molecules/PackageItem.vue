<template>
  <div class="package-item">
    <nuxt-link
      class="package-link"
      :to="{
        name: 'package',
        params: { package: path }
      }"
    >
      {{ tag }}
      {{ name }}
      {{ date }}
      {{ path }}
    </nuxt-link>
  </div>
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

<style scoped></style>
