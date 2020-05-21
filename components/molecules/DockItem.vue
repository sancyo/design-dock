<template>
  <div class="dock-item">
    <nuxt-link
      class="dock-link"
      :to="{
        name: 'dock',
        params: { dock: tag }
      }"
    >
      <div class="wrap">
        <img
          :src="require(`@/static/dock-icon/icon-${tag}.png`)"
          alt=" "
          class="dock-icon"
        />
        <p class="dock-name">{{ name }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
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

.dock-link {
  display: inline-block;
  width: 100%;
  height: 100%;
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
