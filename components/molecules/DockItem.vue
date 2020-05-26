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
    },
    path: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.dock-item {
  display: inline-block;
  width: 5rem;
  height: 5rem;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  margin-right: 1rem;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08), 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.dock-item:hover {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.22), 0 2px 2px 0 rgba(0, 0, 0, 0.14);
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
  width: 3rem;
}
.dock-name {
  font-size: 1.4rem;
  font-weight: bold;
}
</style>
