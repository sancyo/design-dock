<template>
  <div class="container">
    <div class="content-inner">
      <article v-for="item in blogItems" :key="item.id">
        <nuxt-link
          :to="{
            name: 'title',
            params: { title: item.title, path: item.path }
          }"
          >{{ item.title }}
        </nuxt-link>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    blogItems() {
      return this.$store.getters.getItemList.fileMap
    }
  }
}
</script>

<style></style>
