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
  background: #fff;
  padding: 4.8rem;
  margin: 5.6rem auto;
  max-width: 800px;
  box-sizing: border-box;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 2px 0 rgba(0, 0, 0, 0.12);
}

.post-head {
  text-align: center;
  padding: 0 0 5.6rem 0;
}

.post-title {
  margin-top: 2.4rem;
  font-size: 3.2rem;
}

.post-date {
  display: inline-block;
  font-size: 1rem;
  color: #9a9a9a;
  margin-top: 2.8rem;
}
</style>
