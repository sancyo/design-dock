<template>
  <article class="post-item">
    <nuxt-link
      class="post-link"
      :to="{
        name: 'title',
        params: { title: path, path: path }
      }"
    >
      <div class="post-img">
        <img src="" alt="" />
      </div>
      <div class="post-meta">
        <h3 class="post-title">{{ title }}</h3>
        <time class="post-date">{{ date }}</time>
        <span class="post-tag">{{ tag }}</span>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.post-item {
  margin-bottom: 0.8rem;
  background-color: #fff;
  width: 48%;
  border-radius: 10px;
  padding: 1.6rem;
  box-sizing: border-box;
}
.post-link {
  display: flex;
}
.post-img {
  width: 120px;
  height: 80px;
  background-color: #323232;
  border-radius: 5px;
}
.post-meta {
  margin-left: 1.2rem;
}
.post-title {
  font-size: 2rem;
}
.post-date {
  display: block;
  color: #8b8b8c;
  padding: 0.6rem 0;
  font-size: 1.2rem;
}
.post-tag {
  display: inline-block;
  background-color: #323232;
  color: #fff;
  font-weight: bold;
  padding: 0.4rem 1rem;
  border-radius: 7px;
  font-size: 1rem;
}
</style>
