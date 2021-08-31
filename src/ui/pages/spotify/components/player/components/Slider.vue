<template>
  <input
    type="range"
    :style="{
      background: `linear-gradient(to right, #b2b2b2 0%, #b2b2b2 ${
        (Number($attrs.value) / Number($attrs.max || '100')) * 100
      }%, #686868 ${
        (Number($attrs.value) / Number($attrs.max || '100')) * 100
      }%, #686868 100%) !important`,
    }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Slider',
});
</script>

<style lang="postcss" scoped>
input[type='range'] {
  -webkit-appearance: none;
  @apply appearance-none h-1 rounded-full;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  @apply appearance-none
  opacity-0
  group-hover:opacity-100
  w-3
  h-3
  rounded-full
  bg-spotify-white;
}
</style>
