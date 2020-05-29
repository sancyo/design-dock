<template>
  <div class="post-bundle">
    <post-item
      v-for="item in filePathArray"
      :key="item.id"
      :title="item.title"
      :date="item.date"
      :url="item.url"
    />
  </div>
</template>

<script>
import PostItem from '@/components/molecules/PostItem'
export default {
  components: {
    PostItem
  },
  props: {
    // 記事のメタ情報
    filePathArray: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.post-bundle {
  display: block;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}
</style>
