<template>
  <div class="inner">
    <div class="post-bundle">
      <post-item
        v-for="item in blogItems"
        :key="item.id"
        :title="item.title"
        :path="item.path"
        :tag="item.tag"
        :date="item.date"
      />
    </div>
  </div>
</template>

<script>
import PostItem from '@/components/molecules/PostItem'
export default {
  components: {
    PostItem
  },
  computed: {
    blogItems() {
      return this.$store.getters.getItemList.fileMap
    }
  }
}
</script>

<style scoped>
.post-bundle {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
