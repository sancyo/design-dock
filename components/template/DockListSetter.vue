<template>
  <dock-list :dock-list="getDockList()" />
</template>

<script>
import DockList from '@/components/organisms/DockList'
export default {
  components: {
    DockList
  },
  methods: {
    getDockList() {
      console.log(this.$route.params)
      return this.$store.getters.getDockList
    }
  }
}
</script>

<style></style>
