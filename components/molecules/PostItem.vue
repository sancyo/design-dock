<template>
  <article class="post-item">
    <nuxt-link class="post-link" :to="`${sort}/${path}`">
      <div class="post-meta">
        <span class="post-tag">{{ tag }}</span>
        <h3 class="post-title">{{ title }}</h3>
        <time class="post-date">{{ date }}</time>
      </div>
    </nuxt-link>
    {{ this.sort }}
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
    },
    sort: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.post-item {
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
}
.post-link {
  display: flex;
  padding: 1.4rem;
}
.post-title {
  font-size: 1.4rem;
  margin-top: 0.8rem;
}
.post-date {
  display: block;
  color: #8b8b8c;
  font-size: 1rem;
  margin-top: 0.6rem;
}
.post-tag {
  display: inline-block;
  background-color: #323232;
  color: #fff;
  font-weight: bold;
  padding: 0.3rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
}
</style>
