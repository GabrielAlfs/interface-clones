<template>
  <div>
    <svg
      viewBox="0 0 512 512"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      :aria-label="title"
      fill="currentColor"
    >
      <title>{{ title }}</title>
      <path
        d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeIcon',
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
});
</script>
