<template>
  <div class="post-content">
    <div class="post-head">
      <h2 class="post-title">{{ src.title }}</h2>
      <time class="post-date">{{ src.date }}</time>
    </div>
    <post-main :html="setImageBlock()" />
  </div>
</template>

<script>
import PostMain from '@/components/molecules/PostMain'
export default {
  components: {
    PostMain
  },
  props: {
    // 記事のHTML
    src: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      test: ''
    }
  },
  mounted() {
    this.setImageBlock()
  },
  methods: {
    setImageBlock() {
      const re = /\$/
      // htmlを改行コードで分割
      const html = this.src.bodyHtml.split(re)
      console.log(html)
      const map = html.map((x) => {
        x = x.replace('[small-image]', '\n<div class="small-image">')
        x = x.replace('[/]', '</div>\n')
        return x
      })
      console.log(map.join(''))
      return map.join('')
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
