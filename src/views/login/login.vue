<template>
  <div>{{ $store.state.name }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      // name: $store.state.namex
    }
  }
})
</script>

<style lang="scss" scoped></style>
>
