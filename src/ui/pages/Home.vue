<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      gap-8
      h-screen
      to-gray-600
      from-gray-900
      bg-gradient-to-tr
    "
  >
    <p class="text-4xl text-gray-50 font-bold uppercase">Interface Clones</p>
    <router-link
      to="/spotify"
      class="
        px-8
        py-3
        rounded-full
        uppercase
        text-sm
        font-semibold
        shadow-lg
        bg-spotify-green bg-opacity-50
        hover:bg-opacity-90
        transition-colors
        text-gray-300
        hover:text-gray-50
        flex
        items-center
        gap-2
      "
    >
      spotify clone
      <arrow-right-icon class="w-4 h-4" />
    </router-link>
    <a
      href="https://github.com/GabrielAlfs"
      target="_blank"
      class="text-gray-400 text-xs hover:underline"
      >Gabriel Alves @ github.com/GabrielAlfs</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ArrowRightIcon } from '@heroicons/vue/outline';

export default defineComponent({
  name: 'Home',
  components: {
    ArrowRightIcon,
  },
});
</script>
