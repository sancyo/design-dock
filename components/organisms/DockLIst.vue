<template>
  <div class="inner">
    <ul class="dock-list">
      <li v-for="item in items" :key="item.id">
        <dock-item :name="item.name" :tag="item.tag" />
      </li>
    </ul>
  </div>
</template>

<script>
import DockItem from '@/components/molecules/DockItem'
import { DOCK_LIST } from '@/config/constant.js'
export default {
  components: {
    DockItem
  },
  data() {
    return {
      // ナビゲーションのメタ情報
      items: DOCK_LIST
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
