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
      <path
        d="M6.064 10.229l-2.418 2.418L2 11v4h4l-1.647-1.646 2.418-2.418-.707-.707zM11 2l1.647 1.647-2.418 2.418.707.707 2.418-2.418L15 6V2h-4z"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FullScreenIcon',
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
});
</script>
