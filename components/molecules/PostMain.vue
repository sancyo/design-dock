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
  font-size: 1.6rem;
  line-height: 2.4rem;
}

.post-main >>> h2,
.post-main >>> h3,
.post-main >>> h4,
.post-main >>> h5 {
}
.post-main >>> h2 {
  font-size: 2rem;
  padding: 1.4rem 0 1.4rem 1.6rem;
  position: relative;
  margin: 5.6rem 0 1rem 0;
}

.post-main >>> h2::after {
  position: absolute;
  content: '';
  top: 50%;
  left: 0;
  width: 6px;
  height: 80%;
  background: #0786f8;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 3px;
}

.post-main >>> h3 {
  font-size: 1.8rem;
  padding: 1.4rem 0;
  margin: 1.8rem 0;
}

.post-main >>> h4 {
  font-size: 1.6rem;
  margin: 2.4rem 0 0.8rem 0;
}

.post-main >>> ul {
  padding-left: 0.8rem;
  margin: 1.6rem 0;
}

.post-main >>> li {
  list-style-type: disc;
  list-style-position: inside;
}

.post-main >>> pre {
  background: #f7f7f9;
  padding: 2rem;
  margin: 0;
  border-radius: 8px;
}

.post-main >>> code {
  font-family: Menlo, Consolas, Liberation Mono, Courier, monospace;
}

.post-main >>> a {
  color: #20a8ea;
}

.post-main >>> a:hover {
  text-decoration-line: underline;
}

.post-main >>> hr {
  border-color: #fafafa;
  margin: 4rem 0;
}
</style>
