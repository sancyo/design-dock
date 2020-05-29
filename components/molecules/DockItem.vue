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
  width: 10rem;
  height: 10rem;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  margin-right: 1.6rem;
}

.wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.dock-icon {
  width: 4rem;
}
.dock-name {
  font-size: 1.4rem;
  font-weight: bold;
}
</style>
