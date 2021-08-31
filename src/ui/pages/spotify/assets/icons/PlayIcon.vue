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
      <path d="M4.018 14L14.41 8 4.018 2z"></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlayIcon',
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
});
</script>
