<script setup lang="ts">
defineProps<{
  action?:()=>void
  classes?:string
  id?:number
}>()
</script>

<template>
  <button
      :class="`flex whitespace-nowrap text-md !px-4 !py-2 rounded-3xl  ${classes ?? ''}`"
      @click="action"
  >
    <slot />
  </button>
</template>

<style scoped>

</style>