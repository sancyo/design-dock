<template>
  <ul class="package-bundle">
    <li v-for="item in packageArray" :key="item.id">
      <package-item
        :tag="item.tag"
        :name="item.name"
        :date="item.date"
        :path="item.path"
      />
    </li>
  </ul>
</template>

<script>
import PackageItem from '@/components/molecules/PackageItem'
export default {
  components: {
    PackageItem
  },
  props: {
    packageArray: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style></style>
