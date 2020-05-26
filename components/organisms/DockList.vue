<template>
  <ul class="dock-list">
    <li v-for="item in dockList" :key="item.id">
      <dock-item :name="item.name" :tag="item.tag" />
    </li>
  </ul>
</template>

<script>
import DockItem from '@/components/molecules/DockItem'
export default {
  components: {
    DockItem
  },
  props: {
    dockList: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.dock-list {
  display: flex;
  background: #fff;
  width: 100%;
  padding: 2.6rem 1.4rem 1.4rem 1.4rem;
  box-sizing: border-box;
}
</style>
