<template>
  <div class="post-content">
    <div class="post-head">
      <post-tag :name="src.tag" />
      <h2 class="post-title">{{ src.title }}</h2>
      <time class="post-date">{{ src.date }}</time>
    </div>
    <post-main :html="src.bodyHtml" />
  </div>
</template>

<script>
import PostMain from '@/components/molecules/PostMain'
import PostTag from '@/components/atoms/PostTag'
export default {
  components: {
    PostMain,
    PostTag
  },
  props: {
    // 記事のHTML
    src: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.post-content {
  padding: 4rem 5.6rem;
  margin: 4rem auto;
  max-width: 800px;
  box-sizing: border-box;
}

.post-head {
  text-align: center;
  padding: 0 0 6.4rem 0;
  position: relative;
  border-bottom: 1px solid #b2babd;
}

.post-title {
  margin-top: 2.4rem;
  font-size: 2.8rem;
}

.post-date {
  display: inline-block;
  font-size: 1.1rem;
  color: #9a9a9a;
  margin-top: 2.8rem;
}
</style>
