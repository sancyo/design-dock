<template>
  <div class="post-main" v-html="html"></div>
</template>

<script>
import '@/config/markdown.css'
export default {
  props: {
    html: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.post-main {
  max-width: 620px;
  margin: 0 auto;
  padding: 5.6rem 0;
  font-size: 1.8rem;
  font-weight: 300;
}

.post-main >>> h2,
.post-main >>> h3,
.post-main >>> h4,
.post-main >>> h5 {
}
.post-main >>> h2 {
  font-size: 2.8rem;
  padding: 1.6rem 0;
}

.post-main >>> h3 {
  font-size: 2.6rem;
  padding: 1.4rem 0;
}

.post-main >>> h4 {
  font-size: 2.4rem;
  padding: 1.2rem 0;
}

.post-main >>> h5 {
  font-size: 2.2rem;
  padding: 1rem 0;
}
.post-main >>> ul {
  padding-left: 0.8rem;
}
.post-main >>> li {
  list-style-type: disc;
  list-style-position: inside;
}

.post-main >>> pre {
  background: #f7f7f9;
  padding: 1.6rem;
}

.post-main >>> a {
  color: #20a8ea;
}

.post-main >>> a:hover {
  text-decoration-line: underline;
}
</style>
