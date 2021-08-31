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
        fill-rule="evenodd"
        d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccountIcon',
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
});
</script>
