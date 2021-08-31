<template>
  <header
    class="flex justify-between items-center h-15 py-4 px-8 text-spotify-white"
  >
    <div class="flex gap-4">
      <span
        class="
          bg-spotify-black
          opacity-40
          flex
          justify-center
          items-center
          rounded-full
          w-8
          h-8
        "
        ><chevron-left-icon class="w-5 h-5 m-auto"
      /></span>
      <span
        class="
          bg-spotify-black
          opacity-40
          flex
          justify-center
          items-center
          rounded-full
          w-8
          h-8
        "
        ><chevron-right-icon class="w-5 h-5 m-auto"
      /></span>
    </div>
    <Menu as="div" class="relative" v-slot="{ open }">
      <MenuButton
        class="
          flex
          gap-2
          items-center
          rounded-full
          p-0.5
          bg-spotify-black bg-opacity-70
        "
      >
        <img src="https://picsum.photos/200" class="w-7 h-7 rounded-full" />
        <p class="text-sm font-bold">Gabriel Alves</p>
        <span class="mr-1.5">
          <chevron-down-icon
            class="w-4 h-4"
            :class="{ 'transform rotate-180': open }"
          />
        </span>
      </MenuButton>
      <nav-bar-menu class="absolute right-0 mt-2" />
    </Menu>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from '@heroicons/vue/outline';
import { Menu, MenuButton } from '@headlessui/vue';
import NavBarMenu from './components/NavBarMenu.vue';

export default defineComponent({
  name: 'NavBar',
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronDownIcon,
    Menu,
    MenuButton,
    NavBarMenu,
  },
});
</script>
