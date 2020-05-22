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
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.dock-list {
  display: flex;
  margin: 3.2rem 0;
}
</style>
