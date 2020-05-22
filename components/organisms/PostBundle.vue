<template>
  <div class="post-bundle">
    <post-item
      v-for="item in postMeta"
      :key="item.id"
      :title="item.title"
      :path="item.path"
      :tag="item.tag"
      :date="item.date"
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
    postMeta: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.post-bundle {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}
</style>
