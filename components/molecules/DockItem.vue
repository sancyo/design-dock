<template>
  <div class="dock-item">
    <div class="wrap">
      <img
        :src="require(`@/static/dock-icon/icon-${icon}.png`)"
        alt=" "
        class="dock-icon"
      />
      <p class="dock-name">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.dock-item {
  display: inline-block;
  width: 17rem;
  height: 17rem;
  background-color: #fff;
  border-radius: 15px;
  box-sizing: border-box;
  position: relative;
}

.wrap {
  position: absolute;
  bottom: 2.8rem;
  left: 2.4rem;
}

.dock-icon {
  width: 6rem;
}
.dock-name {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0.8rem;
}
</style>
