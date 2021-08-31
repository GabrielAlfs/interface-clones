<template>
  <div>
    <svg
      role="img"
      height="16"
      width="16"
      viewBox="0 0 16 16"
      :aria-label="title"
      fill="currentColor"
    >
      <title>{{ title }}</title>
      <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ForwardIcon',
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
});
</script>
