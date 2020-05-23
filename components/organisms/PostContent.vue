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
  padding: 6.4rem;
  margin: 5.6rem auto;
  max-width: 800px;
  box-sizing: border-box;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 2px 0 rgba(0, 0, 0, 0.12);
}

.post-head {
  text-align: center;
  padding: 0 0 6.4rem 0;
  position: relative;
}
.post-head::after {
  background: #b2babd;
  position: absolute;
  width: 80%;
  height: 0.8px;
  bottom: 0;
  left: 50%;
  content: '';
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
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
